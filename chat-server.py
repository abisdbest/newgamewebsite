import socket
import threading
from datetime import datetime

# Global variables
HOST = '127.0.0.1'
PORT = 5555
ADDR = (HOST, PORT)
FORMAT = 'utf-8'
DISCONNECT_MESSAGE = '!DISCONNECT'
CHAT_LOG_FILE = 'chat_log.txt'

# Create and bind the server socket
server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.bind(ADDR)

# List to keep track of connected clients
clients = []


def broadcast(message, sender_socket):
    """Broadcasts a message to all connected clients."""
    for client in clients:
        if client != sender_socket:
            try:
                client.send(message)
            except Exception as e:
                print(f"Error broadcasting message to {client}: {e}")
                # Remove the client if there's an error
                clients.remove(client)


def handle_client(client_socket, client_address):
    """Handles individual client connections."""
    print(f"[NEW CONNECTION] {client_address} connected.")

    # Add client to the list
    clients.append(client_socket)

    # Welcome message
    welcome_message = f"Welcome to the chat, {client_address}! Type {DISCONNECT_MESSAGE} to exit."
    client_socket.send(welcome_message.encode(FORMAT))

    while True:
        try:
            # Receive message from the client
            message = client_socket.recv(1024).decode(FORMAT)

            # Check for disconnect message
            if message == DISCONNECT_MESSAGE:
                break

            # Get current timestamp
            timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

            # Format the message with timestamp and sender information
            formatted_message = f"[{timestamp}] {client_address}: {message}"

            # Print and save the message to the log file
            print(formatted_message)
            with open(CHAT_LOG_FILE, 'a') as log_file:
                log_file.write(formatted_message + '\n')

            # Broadcast the message to all connected clients
            broadcast(formatted_message.encode(FORMAT), client_socket)

        except Exception as e:
            print(f"Error handling client {client_address}: {e}")
            break

    # Remove the client from the list and close the connection
    clients.remove(client_socket)
    client_socket.close()
    print(f"[DISCONNECT] {client_address} disconnected.")


def start():
    """Starts the server and listens for incoming connections."""
    server.listen()
    print(f"[LISTENING] Server is listening on {HOST}:{PORT}")
    while True:
        # Accept a new connection
        client_socket, client_address = server.accept()

        # Create a thread for the new client
        thread = threading.Thread(target=handle_client, args=(client_socket, client_address))
        thread.start()


if __name__ == "__main__":
    print("[STARTING] Server is starting...")
    start()
