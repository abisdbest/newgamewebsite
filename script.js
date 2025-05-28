// document.addEventListener("DOMContentLoaded", function () {
//   // Check local storage to see if the survey was filled out or displayed
//   if (!localStorage.getItem("surveyFilled") && !localStorage.getItem("surveyDisplayed")) {
//     // Create the survey container div
//     document.body.style.overflow = 'hidden';
//     document.body.style.pointerEvents = 'none';

//     var surveyContainer = document.createElement("div");
//     surveyContainer.id = "surveyframe"
//     surveyContainer.innerHTML = `<iframe src="https://s.surveylegend.com/-O5loNC1IX3UqUR-0XZ4" style="
//     pointer-events: auto;
//     position: fixed;
//     height: 80%;
//     width: 50%;
//     left: 25%;
//     top: 10%;
//     z-index: 999;
//     border: none;
//     border-radius: 20px;"></iframe>

//     <button style="
//     pointer-events: auto;
//     position: fixed;
//     height: 50px;
//     width: 70px;
//     right: calc(25% - 20px);
//     top: calc(10% - 20px);
//     z-index: 999;
//     border: none;
//     border-radius: 20px;
//     background-color: red;
//     color: white;" onclick="document.getElementById('surveyframe').style.display = 'none'; document.body.style.overflow = 'auto';document.body.style.pointerEvents = 'auto';">X close</button>`

//     document.body.append(surveyContainer)

//     // Set a flag in local storage to indicate the survey has been displayed
//     localStorage.setItem("surveyDisplayed", "true");
//   }
// });

function toggleSearch() {
    var searchInput = document.getElementById('searchright');
    searchInput.classList.toggle('active');
}

// if (window.location.hostname === 'blooket1.com') {
//   alert('Sorry, blooket1.com is not ready for public use yet. Please use blooket1.pages.dev. Thank you!');
//   window.location.href = 'https://blooket1.pages.dev';
// }

// unblock-assistant.js

document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('unblockAssistantOverlay');
    const popup = document.getElementById('unblockAssistantPopup');
    const contentDiv = document.getElementById('unblockAssistantContent');
    const prevBtn = document.getElementById('unblockPrevBtn');
    const nextBtn = document.getElementById('unblockNextBtn');
    const submitBtn = document.getElementById('unblockSubmitBtn');
    const progressBar = document.getElementById('unblockAssistantProgressBar');
    const progressBarContainer = progressBar.parentElement; // Assuming progress bar is in a container

    let currentView = 'initial'; // 'initial', 'submission', 'browse'
    let currentStep = 0; // For 'submission' view
    let formData = {};
    let educationalUrlCache = null; // Cache for fetched URLs from browse view
    let filteredUrlCache = null; // For search results in browse view

    // This constant matches the original `totalSteps` and is used for submission flow logic
    const TOTAL_SUBMISSION_STEPS = 9;

    const predefinedKeywordTestUrls = [
        { id: "edu-platform", name: "Educational Platform", url: "https://blooket1.com/educational-resource-platform" },
        { id: "learning-hub", name: "Learning Hub (Query)", url: "https://blooket1.com/?p=learning-hub" },
        { id: "academic-zone", name: "Academic Zone (Hash)", url: "https://blooket1.com/#academic-zone" },
        { id: "study-portals", name: "Study Portals (Subdomain)", url: "https://study.blooket1.com" },
        { id: "quiz-website", name: "Quiz Website (Keyword)", url: "https://blooket1.com/?kw=quiz-site" }
    ];

    const userIconSVG = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18px" height="18px" style="margin-right: 5px; vertical-align: text-bottom;">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>`;

    // --- Main Render Orchestrator ---
    function renderAssistant() {
        // Hide all general navigation buttons initially, show them as needed by views
        prevBtn.classList.add('hidden');
        nextBtn.classList.add('hidden');
        submitBtn.classList.add('hidden');
        const existingFinishBtn = document.getElementById('unblockFinishBtn');
        if (existingFinishBtn) existingFinishBtn.remove();
        // Remove specific browse buttons if they exist
        const browseBackBtn = document.getElementById('browseBackToInitialBtn');
        if (browseBackBtn) browseBackBtn.remove();


        if (currentView === 'initial') {
            renderInitialChoiceScreen();
        } else if (currentView === 'submission') {
            renderSubmissionStep();
        } else if (currentView === 'browse') {
            renderBrowseView();
        }
        updateProgressBarState();
    }

    // --- Initial Choice Screen ---
    function renderInitialChoiceScreen() {
        contentDiv.innerHTML = `
            <h3>Welcome to the Unblock Assistant!</h3>
            <p>This tool can help you access Blooket1 if it's blocked, or let you explore versions others have found success with.</p>
            <p>What would you like to do?</p>
            <div class="unblock-assistant-choices">
                <button id="goToSubmissionBtn" class="assistant-choice-btn">
                    <span class="btn-icon">🔧</span> Submit Unblock Information
                    <small>Answer questions to help us find a new way for you.</small>
                </button>
                <button id="goToBrowseBtn" class="assistant-choice-btn">
                    <span class="btn-icon">🌐</span> Browse Existing Versions
                    <small>See unblocked Blooket1 links created from past submissions.</small>
                </button>
            </div>
        `;
        if (progressBarContainer) progressBarContainer.style.display = 'none';

        document.getElementById('goToSubmissionBtn').onclick = () => {
            currentView = 'submission';
            currentStep = 0;
            formData = {}; // Reset form data for a new submission attempt
            renderAssistant();
        };
        document.getElementById('goToBrowseBtn').onclick = () => {
            currentView = 'browse';
            renderAssistant();
        };
    }

    // --- Browse Existing Versions Screen ---
    function renderBrowseView() {
        contentDiv.innerHTML = `
            <div class="browse-view-header">
                <h3>Explore Unblocked Blooket1 Versions</h3>
                <button id="browseBackToInitialBtn" class="unblock-utility-btn small-btn">← Back to Main Menu</button>
            </div>
            <div class="browse-search-container">
                <input type="text" id="browseSearchInput" placeholder="Search by keyword in URL (e.g., educational, drive)" class="browse-search-input">
            </div>
            <div id="browseUrlListContainer" class="browse-url-list-container">
                <p class="loading-text">Loading existing versions...</p>
            </div>
        `;
        if (progressBarContainer) progressBarContainer.style.display = 'none';

        document.getElementById('browseBackToInitialBtn').onclick = () => {
            currentView = 'initial';
            renderAssistant();
        };

        const searchInput = document.getElementById('browseSearchInput');
        searchInput.oninput = () => {
            const searchTerm = searchInput.value.toLowerCase().trim();
            if (!educationalUrlCache) return;

            if (!searchTerm) {
                filteredUrlCache = [...educationalUrlCache];
            } else {
                filteredUrlCache = educationalUrlCache.filter(item => item.url.toLowerCase().includes(searchTerm));
            }
            displayBrowseItems(filteredUrlCache);
        };

        fetchAndDisplayEducationalUrls();
    }

    async function fetchAndDisplayEducationalUrls() {
    const listContainer = document.getElementById('browseUrlListContainer');
    if (!listContainer) {
        console.error("Error: browseUrlListContainer not found in the DOM.");
        return;
    }

    const searchInput = document.getElementById('browseSearchInput');
    // Use cache if available and search is empty
    if (educationalUrlCache && searchInput && searchInput.value === '') {
        console.log("Using cached educational URLs.");
        filteredUrlCache = [...educationalUrlCache];
        displayBrowseItems(filteredUrlCache);
        return;
    }

    listContainer.innerHTML = '<p class="loading-text">Fetching latest versions...</p>';
    try {
        const response = await fetch('https://blooket1ubdirectory.arielblau2.workers.dev/api/educational-urls', {
            cache: "no-store" // Ensures fresh data is fetched
        });
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText} (status: ${response.status})`);
        }
        const rawDataFromApi = await response.json();
        // console.log('Raw data from API:', JSON.stringify(rawDataFromApi, null, 2)); // For verbose debugging

        if (!Array.isArray(rawDataFromApi)) {
            console.error("API response is not an array:", rawDataFromApi);
            throw new Error("Received invalid data format from the server (expected an array).");
        }

        educationalUrlCache = rawDataFromApi.map((apiItem, index) => {
            let url = 'Error: URL data missing';
            let users = 0;

            if (apiItem && typeof apiItem === 'object') {
                if (typeof apiItem.url === 'string' && apiItem.url.trim() !== '') {
                    url = apiItem.url;
                } else {
                    console.warn(`Item at index ${index} has invalid or empty URL:`, apiItem.url, 'Full API item:', apiItem);
                    url = 'Error: Invalid URL format in API data';
                }

                if (typeof apiItem.users === 'number' && isFinite(apiItem.users)) {
                    users = apiItem.users;
                } else {
                    console.warn(`Item at index ${index} has invalid users count:`, apiItem.users, 'Full API item:', apiItem);
                    // users remains 0 as default
                }
            } else {
                console.warn(`Item at index ${index} is not a valid object:`, apiItem);
                url = 'Error: Invalid item structure from API';
            }

            return { url, users };
        }).sort((a, b) => b.users - a.users); // Sort by actual users descending

        // console.log('Processed educationalUrlCache:', JSON.stringify(educationalUrlCache, null, 2)); // For verbose debugging

        filteredUrlCache = [...educationalUrlCache]; // Initialize filtered list
        displayBrowseItems(filteredUrlCache);

    } catch (error) {
        console.error('Error fetching or processing educational URLs:', error);
        listContainer.innerHTML = `<p class="error-text">Sorry, couldn't load existing versions at the moment. Please try again later.<br><small>Error: ${error.message}</small></p>`;
    }
}

function displayBrowseItems(items) {
    const listContainer = document.getElementById('browseUrlListContainer');
    if (!listContainer) {
        console.error("Critical Error: browseUrlListContainer not found in displayBrowseItems.");
        return;
    }
    listContainer.innerHTML = ''; // Clear previous items or loading text

    if (!items || items.length === 0) {
        listContainer.innerHTML = '<p class="info-text">No versions found matching your criteria.</p>';
        return;
    }

    // console.log('Items to display:', JSON.stringify(items, null, 2)); // For verbose debugging

    items.forEach(item => {
        // By this point, item.url should be a string and item.users a number
        // due to the robust mapping in fetchAndDisplayEducationalUrls.
        const itemDiv = document.createElement('div');
        itemDiv.className = 'browse-item';

        let displayUrl = item.url;
        const currentItemUrl = item.url; // This is now guaranteed to be a string.

        // Only attempt to shorten if it's not an error message
        if (!currentItemUrl.startsWith('Error:')) {
            if (currentItemUrl.includes('drive.google.com/') && currentItemUrl.length > 50) {
                displayUrl = currentItemUrl.substring(0, currentItemUrl.indexOf('drive.google.com/') + 'drive.google.com/'.length) + '...';
            } else if (currentItemUrl.length > 40 && !currentItemUrl.startsWith('http')) {
                // Make sure this heuristic is what you want for non-http URLs
                displayUrl = currentItemUrl.substring(0, 37) + '...';
            }
        }
        // else displayUrl remains the error message string.

        // Ensure userIconSVG is defined or provide a fallback
        const userIconContent = typeof userIconSVG !== 'undefined' ? userIconSVG : '👤';

        itemDiv.innerHTML = `
            <a href="#" class="browse-item-link" title="Visit ${currentItemUrl.startsWith('Error:') ? 'N/A' : currentItemUrl} (opens in new tab)">${displayUrl}</a>
            <div class="browse-item-stats" title="${item.users} users">
                ${userIconContent}
                <span>${item.users}</span>
            </div>
        `;

        let targetUrl = '#'; // Default to '#'
        if (!currentItemUrl.startsWith('Error:')) {
            targetUrl = currentItemUrl;
            if (!targetUrl.startsWith('http://') && !targetUrl.startsWith('https://')) {
                targetUrl = 'https://' + targetUrl;
            }
        }

        const linkElement = itemDiv.querySelector('.browse-item-link');
        if (linkElement) {
            linkElement.href = targetUrl;
            if (targetUrl !== '#') {
                linkElement.target = '_blank';
            }
        } else {
            console.error("Could not find .browse-item-link in created element for:", item);
        }

        listContainer.appendChild(itemDiv);
    });
}


    // --- Submission Flow Logic (adapted from original) ---
    function updateProgressBarState() {
        if (currentView !== 'submission' || !progressBarContainer) {
            if (progressBar) progressBar.style.width = '0%';
            if (progressBarContainer) progressBarContainer.style.display = 'none';
            return;
        }
        if (progressBarContainer) progressBarContainer.style.display = 'block';

        let progress = 0;
        // TOTAL_SUBMISSION_STEPS is the original `totalSteps` (e.g., 9)
        if (currentStep >= (TOTAL_SUBMISSION_STEPS - 1)) { // e.g. step 8, 9, 10 for totalSteps=9
            progress = 100;
        } else if (currentStep === 7) { // "Everything's Working" - also a final state
            progress = 100;
        } else { // Steps 0-6 for totalSteps=9 (denominator totalSteps - 2 = 7)
            progress = (currentStep / (TOTAL_SUBMISSION_STEPS - 2)) * 100;
        }
        progressBar.style.width = `${progress}%`;
    }

    function closeAssistant() {
        overlay.classList.remove('active');
    }

    // Renamed from renderStep to renderSubmissionStep
    async function renderSubmissionStep() {
        contentDiv.innerHTML = ''; // Clear content
        prevBtn.classList.add('hidden');
        nextBtn.classList.add('hidden');
        submitBtn.classList.add('hidden');

        const existingFinishBtn = document.getElementById('unblockFinishBtn');
        if (existingFinishBtn) existingFinishBtn.remove();

        // Back button logic for submission flow
        if (currentStep === 0) { // First step of submission
            prevBtn.classList.remove('hidden');
            prevBtn.textContent = '← Back to Choices';
            prevBtn.onclick = () => {
                currentView = 'initial';
                renderAssistant();
            };
        } else if (currentStep > 0 && currentStep <= 6) { // Regular submission steps with a prev button
            prevBtn.classList.remove('hidden');
            prevBtn.textContent = '← Previous';
            prevBtn.onclick = handleSubmissionPrev;
        }
        // Terminal steps (7, 8, 10) or sending (9) don't get a standard prev button from here.

        switch (currentStep) {
            case 0:
                contentDiv.innerHTML = `
                    <h3>Let's Get Started! (Unblock Submission)</h3>
                    <p>It looks like our game might be blocked on your school's network. Don't worry, we're here to help!</p>
                    <p>This assistant will ask you a few simple questions and run some quick tests (with your help!) to figure out why it's blocked. This helps us create a special version just for you.</p>
                    <p>Ready to start?</p>
                `;
                nextBtn.textContent = 'Start Questions →';
                nextBtn.classList.remove('hidden');
                nextBtn.onclick = handleSubmissionNext;
                break;
            case 1:
                contentDiv.innerHTML = `
                    <h3>Step 1: Can you access our main website?</h3>
                    <p>First, let's see if the main game website is completely blocked for you.</p>
                    <p>Can you open <a href="https://blooket1.com" target="_blank" class="test-link" style="background-color: #007bff;">blooket1.com</a> in a NEW tab?</p>
                    <p><strong>What happened when you tried?</strong></p>
                    <label class="unblock-option">
                        <input type="radio" name="siteAccess" value="yes" ${formData.siteAccess === 'yes' ? 'checked' : ''}> Yes, the website loaded fine.
                    </label>
                    <label class="unblock-option">
                        <input type="radio" name="siteAccess" value="no" ${formData.siteAccess === 'no' ? 'checked' : ''}> No, it was blocked immediately or showed an error.
                    </label>
                    <label class="unblock-option">
                        <input type="radio" name="siteAccess" value="partially" ${formData.siteAccess === 'partially' ? 'checked' : ''}> It loaded, but parts of the game didn't work.
                    </label>
                `;
                nextBtn.textContent = 'Next →';
                nextBtn.classList.remove('hidden');
                nextBtn.onclick = handleSubmissionNext;
                break;
            case 2:
                contentDiv.innerHTML = `
                    <h3>Step 2: What message did you see?</h3>
                    <p>If the site was blocked, what did the message on your screen say? This is very important!</p>
                    <p><em>Examples: "Access Denied", "Blocked by School Policy", "Content Filtered"</em></p>
                    <textarea id="blockMessage" placeholder="Type the exact message here..." rows="4">${formData.blockMessage || ''}</textarea>
                    <p>If you didn't see a message, just type "No message, just blank" or "Error loading page".</p>
                `;
                nextBtn.classList.remove('hidden');
                nextBtn.onclick = handleSubmissionNext;
                break;
            case 3:
                contentDiv.innerHTML = `
                    <h3>Step 3: Do you know your school's web filter?</h3>
                    <p>Many schools use a specific system to block websites. Sometimes, the block message will mention its name!</p>
                    <p>Have you seen any of these names, or do you know what your school uses?</p>
                    <label class="unblock-option"><input type="radio" name="blockingSystem" value="lights_speed" ${formData.blockingSystem === 'lights_speed' ? 'checked' : ''}> Lightspeed Systems</label>
                    <label class="unblock-option"><input type="radio" name="blockingSystem" value="go_guardian" ${formData.blockingSystem === 'go_guardian' ? 'checked' : ''}> GoGuardian</label>
                    <label class="unblock-option"><input type="radio" name="blockingSystem" value="securly" ${formData.blockingSystem === 'securly' ? 'checked' : ''}> Securly</label>
                    <label class="unblock-option"><input type="radio" name="blockingSystem" value="iboss" ${formData.blockingSystem === 'iboss' ? 'checked' : ''}> iboss</label>
                    <label class="unblock-option"><input type="radio" name="blockingSystem" value="cisco_umbrella" ${formData.blockingSystem === 'cisco_umbrella' ? 'checked' : ''}> Cisco Umbrella</label>
                    <label class="unblock-option"><input type="radio" name="blockingSystem" value="smooth_wall" ${formData.blockingSystem === 'smooth_wall' ? 'checked' : ''}> Smoothwall</label>
                    <label class="unblock-option"><input type="radio" name="blockingSystem" value="zscaler" ${formData.blockingSystem === 'zscaler' ? 'checked' : ''}> Zscaler</label>
                    <label class="unblock-option"><input type="radio" name="blockingSystem" value="i_dont_know" ${formData.blockingSystem === 'i_dont_know' ? 'checked' : ''}> I don't know / Not listed</label>
                    <textarea id="blockingSystemDetails" placeholder="If 'I don't know' or other, please describe..." rows="2">${formData.blockingSystemDetails || ''}</textarea>
                `;
                nextBtn.classList.remove('hidden');
                nextBtn.onclick = handleSubmissionNext;
                break;
            case 4:
                contentDiv.innerHTML = `
                    <h3>Step 4: Test Different Unblock Links</h3>
                    <p>Let's try loading links with 'school-friendly' addresses. Click each, note what happens, then report back here.</p>
                    <p class="instruction"><strong>For each link:</strong> Click it (opens new tab). See if it loads. Report below.</p>
                    <div class="keyword-test-area" id="predefinedTestsContainer"></div>
                    <div class="keyword-test-area" style="margin-top: 20px;">
                        <h4>Try Your Own Keyword:</h4>
                        <p class="instruction">Enter a keyword (e.g., 'quiz', 'docs') and test the generated link.</p>
                        <div class="custom-keyword-input-container">
                            <input type="text" id="customKeywordInput" placeholder="e.g. quizizz, maths" value="${formData.customKeywordTest?.keyword || ''}">
                            <button id="generateCustomLinkBtn" class="unblock-utility-btn">Generate Link</button>
                        </div>
                        <div id="customTestResultWrapper" class="custom-test-result-wrapper" style="display: ${formData.customKeywordTest?.url ? 'block' : 'none'};">
                            <p>Try this link: <a id="customTestGeneratedLink" href="#" target="_blank" class="test-link" style="background-color: #f39c12;"></a></p>
                            <div class="result-options">
                                <label><input type="radio" name="customTestResult" value="loaded" ${formData.customKeywordTest?.result === 'loaded' ? 'checked' : ''}> Loaded!</label>
                                <label><input type="radio" name="customTestResult" value="blocked" ${formData.customKeywordTest?.result === 'blocked' ? 'checked' : ''}> Blocked.</label>
                                <label><input type="radio" name="customTestResult" value="error" ${formData.customKeywordTest?.result === 'error' ? 'checked' : ''}> Error.</label>
                            </div>
                        </div>
                    </div>
                `;
                setupPredefinedTests();
                setupCustomKeywordTest();
                nextBtn.disabled = !checkAllKeywordTestsCompleted(); // Initial state
                nextBtn.classList.remove('hidden');
                nextBtn.onclick = handleSubmissionNext;
                break;
            case 5:
                contentDiv.innerHTML = `
                    <h3>Step 5: Tell us about your connection.</h3>
                    <p><strong>Where are you trying to play?</strong></p>
                    <label class="unblock-option"><input type="radio" name="networkType" value="school-wifi" ${formData.networkType === 'school-wifi' ? 'checked' : ''}> School Wi-Fi / Computer</label>
                    <label class="unblock-option"><input type="radio" name="networkType" value="home-wifi" ${formData.networkType === 'home-wifi' ? 'checked' : ''}> Home Wi-Fi</label>
                    <label class="unblock-option"><input type="radio" name="networkType" value="public-wifi" ${formData.networkType === 'public-wifi' ? 'checked' : ''}> Public Wi-Fi</label>
                    <label class="unblock-option"><input type="radio" name="networkType" value="other" ${formData.networkType === 'other' ? 'checked' : ''}> Other</label>
                    <textarea id="networkDetails" placeholder="If 'Other', please describe..." rows="2">${formData.networkDetails || ''}</textarea>
                    <p><strong>What type of device are you using?</strong></p>
                    <label class="unblock-option"><input type="radio" name="deviceType" value="chromebook" ${formData.deviceType === 'chromebook' ? 'checked' : ''}> School Chromebook</label>
                    <label class="unblock-option"><input type="radio" name="deviceType" value="windows" ${formData.deviceType === 'windows' ? 'checked' : ''}> Windows PC</label>
                    <label class="unblock-option"><input type="radio" name="deviceType" value="mac" ${formData.deviceType === 'mac' ? 'checked' : ''}> Mac Computer</label>
                    <label class="unblock-option"><input type="radio" name="deviceType" value="ipad" ${formData.deviceType === 'ipad' ? 'checked' : ''}> iPad</label>
                    <label class="unblock-option"><input type="radio" name="deviceType" value="phone" ${formData.deviceType === 'phone' ? 'checked' : ''}> Phone</label>
                    <label class="unblock-option"><input type="radio" name="deviceType" value="other" ${formData.deviceType === 'other' ? 'checked' : ''}> Other</label>
                    <textarea id="deviceDetails" placeholder="If 'Other', please describe..." rows="2">${formData.deviceDetails || ''}</textarea>
                `;
                nextBtn.classList.remove('hidden');
                nextBtn.onclick = handleSubmissionNext;
                break;
            case 6:
                contentDiv.innerHTML = `
                    <h3>Step 6: Review and Send!</h3>
                    <p>Please review the information. If it's correct, click 'Send Report'.</p>
                    <div class="step-summary">
                        <p><b>Main Site Access:</b> ${formData.siteAccess || 'N/A'}</p>
                        <p><b>Block Message:</b> ${formData.blockMessage || 'N/A'}</p>
                        <p><b>Blocking System:</b> ${formData.blockingSystem || 'N/A'} ${formData.blockingSystemDetails ? `(${formData.blockingSystemDetails})` : ''}</p>
                        <h4>Link Tests:</h4>
                        <ul style="list-style: disc; margin-left: 20px;">
                            ${predefinedKeywordTestUrls.map(test => `<li><b>${test.name}:</b> ${formData.predefinedKeywordTests?.[test.id]?.result || 'Not tested'}</li>`).join('')}
                        </ul>
                        <p><b>Custom Keyword:</b> ${formData.customKeywordTest?.keyword || 'None'}, Result: ${formData.customKeywordTest?.result || 'Not tested'}</p>
                        <p><b>Network:</b> ${formData.networkType || 'N/A'} ${formData.networkDetails ? `(${formData.networkDetails})` : ''}</p>
                        <p><b>Device:</b> ${formData.deviceType || 'N/A'} ${formData.deviceDetails ? `(${formData.deviceDetails})` : ''}</p>
                    </div>
                `;
                submitBtn.classList.remove('hidden');
                submitBtn.onclick = handleSubmitReport;
                break;
            case 7: // "Everything's Working"
                contentDiv.innerHTML = `
                    <h3>Great News! Everything's Working!</h3>
                    <p style="text-align: center; color: #28a745;">It looks like blooket1.com loaded fine for you, so the game should be unblocked!</p>
                `;
                addTerminalButton('Finish & Close', '#28a745');
                break;
            case 8: // "Sorry, couldn't unblock"
                contentDiv.innerHTML = `
                    <h3>Sorry, We Couldn't Find a Solution Yet.</h3>
                    <p style="text-align: center; color: #dc3545;">Based on the tests, we couldn't find an immediate unblock method.</p>
                    <p style="text-align: center;">We still encourage you to submit a report (go back to Review & Send if you'd like) so our team can analyze your situation for future solutions.</p>
                `;
                addTerminalButton('Go Back to Tests', '#007bff', () => { currentStep = 4; renderSubmissionStep(); });
                addTerminalButton('Close', '#95a5a6', closeAssistant, true); // Add as a secondary button
                break;
            case 9: // Submission sending
                contentDiv.innerHTML = `
                    <h3>Sending Your Report...</h3>
                    <div class="spinner"></div>
                    <p style="text-align: center;">Please wait...</p>
                `;
                break;
            case 10: // Success or Error after report submission
                // This case is now primarily for success. Errors are handled in handleSubmitReport.
                contentDiv.innerHTML = `
                    <h3>Thank You!</h3>
                    <p style="text-align: center;">Your report has been successfully sent. We'll analyze the information.</p>
                    <p style="text-align: center;">You can now close this window or check the "Browse Existing Versions" for updates.</p>
                `;
                addTerminalButton('Close', '#95a5a6');
                break;
        }
        updateProgressBarState(); // Update after content is set
    }

    function addTerminalButton(text, color, onClickCallback, secondary = false) {
        const btn = document.createElement('button');
        btn.id = secondary ? 'unblockFinishBtnSecondary' : 'unblockFinishBtn';
        btn.textContent = text;
        btn.style.backgroundColor = color;
        btn.style.marginLeft = secondary ? '10px' : 'auto'; // Adjust margin for secondary
        btn.style.marginRight = secondary ? 'auto' : 'auto';
        btn.style.display = 'block'; // Ensure block for auto margins
        if (secondary) btn.style.marginTop = '10px'; // Add some space if it's a second button below
        btn.onclick = onClickCallback || closeAssistant;
        document.getElementById('unblockAssistantButtons').appendChild(btn);
    }


    // --- Submission Flow Button Handlers ---
    async function handleSubmissionNext() {
        if (currentStep === 0) { // Intro step of submission flow
            // No data to collect, just proceed
        } else if (currentStep === 1) { // Site access check
            collectData();
            if (!validateStep()) {
                alert('Please select an option for site access.');
                return;
            }
            if (formData.siteAccess === 'yes') {
                currentStep = 7; // Jump to "Everything's Working"
                renderSubmissionStep();
                return;
            }
        } else if (currentStep > 0 && currentStep < 6) { // Steps 2-5
            collectData();
            if (!validateStep()) {
                alert('Please fill out all required information for this step.');
                return;
            }
        }

        if (currentStep === 4) { // Keyword tests step
            // Data already collected if this point is reached after interaction or by default for next
            // Validation for step 4 (checkAllKeywordTestsCompleted) is key
            if (!validateStep()) { // This calls checkAllKeywordTestsCompleted
                alert('Please complete at least one link test (either predefined or your custom one) by selecting its result.');
                nextBtn.disabled = !checkAllKeywordTestsCompleted(); // Ensure button state reflects this
                return;
            }
            const anyPredefinedLoaded = predefinedKeywordTestUrls.some(test => formData.predefinedKeywordTests?.[test.id]?.result === 'loaded');
            const customLoaded = formData.customKeywordTest?.result === 'loaded';

            if (!anyPredefinedLoaded && !customLoaded) {
                currentStep = 8; // "Sorry, couldn't unblock based on tests"
                renderSubmissionStep();
                return;
            }
        }

        if (currentStep < 6) { // Max step before review is 5. Review is 6.
            currentStep++;
            await renderSubmissionStep();
        }
    }

    function handleSubmissionPrev() {
        // collectData() is generally good before moving, unless it's a terminal state we are leaving
        if (currentStep > 0 && currentStep <= 6) { // Only collect if we are on a data entry step
            collectData();
        }

        if (currentStep === 7) { currentStep = 1; } // From "Everything's Working" back to site access
        else if (currentStep === 8) { currentStep = 4; } // From "Couldn't unblock" back to tests
        else if (currentStep === 9 || currentStep === 10) { currentStep = 6; } // From Sending/Sent back to Review
        else if (currentStep > 0) { currentStep--; }
        // If currentStep becomes 0, renderSubmissionStep will set up "Back to Choices"

        renderSubmissionStep();
    }

    async function handleSubmitReport() {
        collectData(); // Ensure data is current
        currentStep = 9; // Show sending spinner
        renderSubmissionStep();

        const WEBHOOK_ENDPOINT_URL = 'https://b1ubsubmission.blaub002-302.workers.dev/';
        try {
            const response = await fetch(WEBHOOK_ENDPOINT_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userAgent: navigator.userAgent,
                    timestamp: new Date().toISOString(),
                    currentUrl: window.location.href,
                    ...formData,
                }),
            });

            if (response.ok) {
                console.log('Report sent successfully:', formData);
                currentStep = 10; // Success state
                renderSubmissionStep();
            } else {
                console.error('Failed to send report:', response.status, response.statusText);
                let errorMessage = `Failed to send report (${response.status} ${response.statusText}).`;
                if (response.status === 0 || String(response.status).startsWith('4') || String(response.status).startsWith('5')) {
                    errorMessage = `Oops! We couldn't send your report. This might be a network filter or temporary issue.`;
                }
                contentDiv.innerHTML = `
                    <h3>Oops! Something Went Wrong.</h3>
                    <p style="text-align: center; color: red;">${errorMessage}</p>
                    <p style="text-align: center;">Please try again later, or contact support if this persists.</p>
                `;
                addTerminalButton('Close', '#95a5a6');
            }
        } catch (error) {
            console.error('Network Error during report submission:', error);
            let errorMessage = `A network error occurred. This often means a filter is blocking our connection.`;
            if (error.name === 'TypeError' && error.message.includes('fetch')) { // More robust check for fetch errors
                errorMessage += ` (Commonly caused by network filters or browser security.)`;
            } else {
                errorMessage += ` Details: ${error.message}`;
            }
            contentDiv.innerHTML = `
                <h3>Oops! Something Went Wrong.</h3>
                <p style="text-align: center; color: red;">${errorMessage}</p>
                <p style="text-align: center;">Try again later or email: <a href="mailto:info.blooket1@gmail.com">info.blooket1@gmail.com</a></p>
            `;
            addTerminalButton('Close', '#95a5a6');
        } finally {
            // Ensure main action buttons are hidden if we are in a terminal error state handled above
            if (currentStep !== 10) { // If not the success step
                prevBtn.classList.add('hidden');
                nextBtn.classList.add('hidden');
                submitBtn.classList.add('hidden');
            }
        }
    }

    // --- Data Collection & Validation (largely original) ---
    function collectData() {
        if (currentView !== 'submission') return;

        if (currentStep === 1) {
            const selected = document.querySelector('input[name="siteAccess"]:checked');
            formData.siteAccess = selected ? selected.value : (formData.siteAccess || '');
        } else if (currentStep === 2) {
            const el = document.getElementById('blockMessage');
            formData.blockMessage = el ? el.value.trim() : (formData.blockMessage || '');
        } else if (currentStep === 3) {
            const selected = document.querySelector('input[name="blockingSystem"]:checked');
            formData.blockingSystem = selected ? selected.value : (formData.blockingSystem || '');
            const detailsEl = document.getElementById('blockingSystemDetails');
            formData.blockingSystemDetails = detailsEl ? detailsEl.value.trim() : (formData.blockingSystemDetails || '');
        } else if (currentStep === 4) {
            formData.predefinedKeywordTests = formData.predefinedKeywordTests || {};
            predefinedKeywordTestUrls.forEach(test => {
                const resultRadio = document.querySelector(`input[name="predefinedTest-${test.id}"]:checked`);
                if (resultRadio) {
                    formData.predefinedKeywordTests[test.id] = { url: test.url, result: resultRadio.value };
                } else if (!formData.predefinedKeywordTests[test.id]) {
                    formData.predefinedKeywordTests[test.id] = { url: test.url, result: undefined }; // Ensure it exists
                }
            });

            const customKeywordInput = document.getElementById('customKeywordInput');
            const customTestResultRadio = document.querySelector('input[name="customTestResult"]:checked');
            if (customKeywordInput && customKeywordInput.value.trim()) {
                const generatedUrl = formData.customKeywordTest?.url || `https://blooket1.com/?kw=${encodeURIComponent(customKeywordInput.value.trim())}`;
                formData.customKeywordTest = {
                    keyword: customKeywordInput.value.trim(),
                    url: generatedUrl,
                    result: customTestResultRadio ? customTestResultRadio.value : (formData.customKeywordTest?.result || undefined)
                };
            } else {
                // If input is cleared, keep potential old result but mark keyword as empty or clear test
                if (formData.customKeywordTest) formData.customKeywordTest.keyword = '';
            }
        } else if (currentStep === 5) {
            const networkType = document.querySelector('input[name="networkType"]:checked');
            formData.networkType = networkType ? networkType.value : (formData.networkType || '');
            const netDetailsEl = document.getElementById('networkDetails');
            formData.networkDetails = netDetailsEl ? netDetailsEl.value.trim() : (formData.networkDetails || '');

            const deviceType = document.querySelector('input[name="deviceType"]:checked');
            formData.deviceType = deviceType ? deviceType.value : (formData.deviceType || '');
            const devDetailsEl = document.getElementById('deviceDetails');
            formData.deviceDetails = devDetailsEl ? devDetailsEl.value.trim() : (formData.deviceDetails || '');
        }
    }

    function validateStep() {
        if (currentView !== 'submission') return true;

        if (currentStep === 1) {
            return !!document.querySelector('input[name="siteAccess"]:checked');
        } else if (currentStep === 2) {
            return formData.blockMessage && formData.blockMessage.length > 3; // Shortened min length a bit
        } else if (currentStep === 3) {
            const systemSelected = !!document.querySelector('input[name="blockingSystem"]:checked');
            if (!systemSelected) return false;
            if (formData.blockingSystem === 'i_dont_know' && formData.blockingSystemDetails && formData.blockingSystemDetails.length < 3) {
                // If "I don't know" and details are very short, maybe prompt more, but allow for now.
            }
            return true;
        } else if (currentStep === 4) {
            return checkAllKeywordTestsCompleted();
        } else if (currentStep === 5) {
            const networkSelected = !!document.querySelector('input[name="networkType"]:checked');
            const deviceSelected = !!document.querySelector('input[name="deviceType"]:checked');
            if (!networkSelected || !deviceSelected) return false;
            if (formData.networkType === 'other' && (!formData.networkDetails || formData.networkDetails.length < 3)) return false;
            if (formData.deviceType === 'other' && (!formData.deviceDetails || formData.deviceDetails.length < 3)) return false;
            return true;
        }
        return true; // Default for steps without specific validation here (e.g. step 0, 6)
    }

    function setupPredefinedTests() {
        const container = document.getElementById('predefinedTestsContainer');
        if (!container) return;
        container.innerHTML = '<h4>Predefined Links:</h4>';
        formData.predefinedKeywordTests = formData.predefinedKeywordTests || {};

        predefinedKeywordTestUrls.forEach(test => {
            const testItem = document.createElement('div');
            testItem.classList.add('test-item');
            const currentResult = formData.predefinedKeywordTests[test.id]?.result;
            testItem.innerHTML = `
                <div class="test-link-wrapper">
                    <span>${test.name}:</span>
                    <a href="${test.url}" target="_blank" class="test-link">${test.url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}</a>
                </div>
                <div class="result-options">
                    <label><input type="radio" name="predefinedTest-${test.id}" value="loaded" ${currentResult === 'loaded' ? 'checked' : ''}> Loaded</label>
                    <label><input type="radio" name="predefinedTest-${test.id}" value="blocked" ${currentResult === 'blocked' ? 'checked' : ''}> Blocked</label>
                    <label><input type="radio" name="predefinedTest-${test.id}" value="error" ${currentResult === 'error' ? 'checked' : ''}> Error</label>
                </div>
            `;
            container.appendChild(testItem);
            testItem.querySelectorAll(`input[name="predefinedTest-${test.id}"]`).forEach(radio => {
                radio.addEventListener('change', (event) => {
                    formData.predefinedKeywordTests[test.id] = { url: test.url, result: event.target.value };
                    nextBtn.disabled = !checkAllKeywordTestsCompleted();
                });
            });
            if (!formData.predefinedKeywordTests[test.id]) { // Ensure object exists for this test
                formData.predefinedKeywordTests[test.id] = { url: test.url, result: undefined };
            }
        });
    }

    function setupCustomKeywordTest() {
        const customKeywordInput = document.getElementById('customKeywordInput');
        const generateCustomLinkBtn = document.getElementById('generateCustomLinkBtn');
        const customTestResultWrapper = document.getElementById('customTestResultWrapper');
        const customTestGeneratedLink = document.getElementById('customTestGeneratedLink');

        if (!customKeywordInput || !generateCustomLinkBtn || !customTestResultWrapper || !customTestGeneratedLink) return;

        // Restore state if formData has it
        if (formData.customKeywordTest && formData.customKeywordTest.url) {
            customTestGeneratedLink.href = formData.customKeywordTest.url;
            customTestGeneratedLink.textContent = formData.customKeywordTest.url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
            customTestResultWrapper.style.display = 'block';
        }


        generateCustomLinkBtn.onclick = () => {
            const keyword = customKeywordInput.value.trim();
            if (!keyword) {
                alert('Please enter a keyword!');
                return;
            }
            const generatedUrl = `https://blooket1.com/?kw=${encodeURIComponent(keyword)}`;
            customTestGeneratedLink.href = generatedUrl;
            customTestGeneratedLink.textContent = generatedUrl.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
            customTestResultWrapper.style.display = 'block';

            formData.customKeywordTest = {
                keyword: keyword,
                url: generatedUrl,
                result: undefined // Reset result when new link is generated
            };
            document.querySelectorAll('input[name="customTestResult"]').forEach(radio => radio.checked = false);
            nextBtn.disabled = !checkAllKeywordTestsCompleted();
        };

        document.querySelectorAll('input[name="customTestResult"]').forEach(radio => {
            radio.addEventListener('change', (event) => {
                if (formData.customKeywordTest) {
                    formData.customKeywordTest.result = event.target.value;
                } else { // Edge case: result selected before generating link (should not happen with UI flow)
                    const keyword = customKeywordInput.value.trim();
                    if (keyword) {
                        formData.customKeywordTest = {
                            keyword: keyword,
                            url: `https://blooket1.com/?kw=${encodeURIComponent(keyword)}`, // Re-generate URL to be safe
                            result: event.target.value
                        };
                    }
                }
                nextBtn.disabled = !checkAllKeywordTestsCompleted();
            });
        });
    }

    function checkAllKeywordTestsCompleted() {
        // At least one predefined test must have a result OR custom test must be attempted (keyword entered) AND have a result.
        const anyPredefinedSelected = predefinedKeywordTestUrls.some(test =>
            formData.predefinedKeywordTests && formData.predefinedKeywordTests[test.id] && formData.predefinedKeywordTests[test.id].result !== undefined
        );

        const customTestAttemptedAndReported =
            formData.customKeywordTest &&
            formData.customKeywordTest.keyword && // Keyword must be non-empty
            formData.customKeywordTest.result !== undefined;

        return anyPredefinedSelected || customTestAttemptedAndReported;
    }

    // --- Event Listeners for dynamic content in submission form ---
    contentDiv.addEventListener('change', (event) => {
        if (currentView !== 'submission') return;
        // For radio buttons not part of keyword tests (handled by their own listeners)
        if (event.target.type === 'radio' && !event.target.name.startsWith('predefinedTest-') && event.target.name !== 'customTestResult') {
            collectData(); // Collect data for the current step
            if (currentStep === 1 || currentStep === 3 || currentStep === 5) { // Steps with simple radio validation
                // Potentially re-validate or enable next button if applicable, but typically handled by Next click.
            }
        }
    });
    contentDiv.addEventListener('input', (event) => {
        if (currentView !== 'submission') return;
        if (event.target.tagName === 'TEXTAREA' || (event.target.type === 'text' && event.target.id !== 'customKeywordInput')) {
            collectData(); // Collect data for the current step
        }
        // For customKeywordInput, its changes are handled more directly by generate button and result radios
    });

    // --- Overlay Click to Close ---
    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
            closeAssistant();
        }
    });

    // --- Global Entry Point ---
    window.startUnblockAssistant = () => {
        currentView = 'initial';
        currentStep = 0;
        formData = {};
        educationalUrlCache = null; // Clear browse cache on restart
        filteredUrlCache = null;
        overlay.classList.add('active');
        renderAssistant();
    };

    // --- CSS Styles (can be moved to a .css file) ---
    const styles = `
        .unblock-assistant-choices { display: flex; flex-direction: column; gap: 15px; margin-top: 20px; }
        .assistant-choice-btn { 
            padding: 15px; text-align: left; background-color: #f0f0f0; border: 1px solid #ddd; border-radius: 8px; cursor: pointer;
            font-size: 1.1em; line-height: 1.4; transition: background-color 0.2s, box-shadow 0.2s; display: flex; flex-direction: column;
        }
        .assistant-choice-btn:hover { background-color: #e9e9e9; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .assistant-choice-btn .btn-icon { font-size: 1.5em; margin-right: 10px; display: inline-block; width: 30px; } /* For emoji/icon alignment */
        .assistant-choice-btn small { font-size: 0.8em; color: #555; margin-top: 5px; }

        .browse-view-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; }
        .browse-search-container { margin-bottom: 15px; }
        .browse-search-input { width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; font-size: 1em;}
        .browse-url-list-container { max-height: 275px; overflow-y: auto; border: 1px solid #eee; padding: 10px; border-radius: 4px; background: #f9f9f9; }
        .browse-item { display: flex; justify-content: space-between; align-items: center; padding: 10px; border-bottom: 1px solid #eee; }
        .browse-item:last-child { border-bottom: none; }
        .browse-item-link { text-decoration: none; color: #007bff; font-weight: 500; flex-grow: 1; word-break: break-all; }
        .browse-item-link:hover { text-decoration: underline; }
        .browse-item-stats { display: flex; align-items: center; color: #555; font-size: 0.9em; white-space: nowrap; margin-left: 15px; }
        .loading-text, .error-text, .info-text { text-align: center; padding: 20px; color: #777; }
        .error-text { color: red; }
        .unblock-utility-btn { background-color: #6c757d; color: white; border: none; padding: 8px 12px; border-radius: 4px; cursor: pointer; font-size: 0.9em; }
        .unblock-utility-btn.small-btn { padding: 6px 10px; font-size: 0.85em; }
        .unblock-utility-btn:hover { background-color: #5a6268; }
        .test-link { display: inline-block; padding: 6px 10px; color: white; border-radius: 4px; text-decoration: none; margin: 5px 0; }
        .test-link:hover { opacity: 0.9; }
        .unblock-option { display: block; margin: 8px 0; padding: 8px; border: 1px solid #eee; border-radius: 4px; cursor: pointer; }
        .unblock-option:has(input:checked) { background-color: #e6f7ff; border-color: #91d5ff; }
        .unblock-option input[type="radio"] { margin-right: 8px; }
        .custom-keyword-input-container { display: flex; gap: 10px; margin-bottom: 10px; align-items: center; }
        .custom-keyword-input-container input[type="text"] { flex-grow: 1; padding: 8px; border: 1px solid #ccc; border-radius: 4px; }
        .spinner { width: 40px; height: 40px; margin: 20px auto; border: 4px solid #f3f3f3; border-top: 4px solid #3498db; border-radius: 50%; animation: spin 1s linear infinite; }
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        #unblockAssistantButtons button { margin-left: 5px; margin-right: 5px;} /* Basic spacing for bottom buttons */
        #unblockFinishBtn, #unblockFinishBtnSecondary { display: block; margin: 10px auto; } /* Center finish/close buttons */
    `;
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

});

document.addEventListener("DOMContentLoaded", function () {
    const CURRENT_DOMAIN = location.hostname; // Gets current domain
    const POPUP_DISPLAY_DURATION = 3000; // 10 seconds in milliseconds (adjust as needed)

    // Only show the popup if on blooket1.pages.dev and migration hasn't been shown before
    if (CURRENT_DOMAIN === "blooket1.pages.dev") {
        // Create the migration popup
        const popup = document.createElement("div");
        popup.id = "migration-popup";
        popup.innerHTML = `
        <button id="close-popup-btn" style="position: absolute; top: 8px; right: 8px; background: none; border: none; color: #fff; font-size: 20px; cursor: pointer;">×</button>
        <p style="font-weight: bold; color: red;">Important: Blooket1.pages.dev will be taken down soon! Please migrate to blooket1.com.</p>
        <p>If you encounter any issues, please email us at <a href="mailto:info.blooket1@gmail.com">info.blooket1@gmail.com</a>.</p>
        <button id="redirect-btn">Go to blooket1.com</button>
    `;
        document.body.appendChild(popup);

        // Get references to elements
        const closeButton = document.getElementById("close-popup-btn");
        const redirectButton = document.getElementById("redirect-btn");

        // Handle button click for redirect
        redirectButton.onclick = function () {
            window.location.href = "https://blooket1.com";
        };

        // Handle close button click
        closeButton.onclick = function () {
            popup.style.opacity = "0"; // Start fade out
            setTimeout(() => {
                popup.remove(); // Remove after fade out
            }, 500); // Match transition duration
        };

        // Make the popup disappear after a few seconds
        setTimeout(() => {
            if (popup) { // Check if popup still exists (might have been closed by user)
                popup.style.opacity = "0"; // Start fade out
                setTimeout(() => {
                    popup.remove(); // Remove after fade out
                }, 500); // Match transition duration
            }
        }, POPUP_DISPLAY_DURATION);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const ubIcon = document.getElementById('ubicon'); // Your unblock icon

    if (!ubIcon) {
        console.warn('Unblock icon (#ubicon) not found. Feature popup will not be displayed.');
        return; // Exit if the icon isn't there
    }

    // Determine the message based on the current domain
    const isPagesDev = window.location.hostname.includes('pages.dev');
    let messageText;
    if (isPagesDev) {
        messageText = "Welcome! If you're blocked from blooket1.com, or know someone who is, click the glowing lock icon to use our NEW Unblock Assistant!";
    } else {
        messageText = "Having trouble accessing Blooket? Click the glowing lock icon to use our NEW Unblock Assistant!";
    }

    // 1. Create the popup container
    const popup = document.createElement('div');
    popup.classList.add('feature-info-popup');
    // We don't need 'is-pages-dev' class for styling the arrow direction anymore,
    // as that's handled by 'point-right' based on position logic.

    // 2. Create the message paragraph
    const messageP = document.createElement('p');
    messageP.textContent = messageText;
    popup.appendChild(messageP);

    // 3. Create the close button
    const closeBtn = document.createElement('button');
    closeBtn.classList.add('close-btn');
    closeBtn.textContent = '×'; // A common 'x' character for close
    popup.appendChild(closeBtn);

    // 4. Add the popup to the body
    document.body.appendChild(popup);

    // 5. Position the popup next to the icon
    // Use setTimeout to ensure the DOM has settled and getBoundingClientRect is accurate
    setTimeout(() => {
        const iconRect = ubIcon.getBoundingClientRect();
        const popupWidth = popup.offsetWidth; // Get popup width after it's in DOM
        const popupHeight = popup.offsetHeight; // Get popup height after it's in DOM

        const spacing = 20; // Space between icon and popup

        // Default position: To the left of the icon
        let popupLeft = iconRect.left - popupWidth - spacing;
        let popupTop = iconRect.top + iconRect.height / 2 - popupHeight / 2;

        // Add 'point-right' class as this is our new default behavior
        popup.classList.add('point-right');

        // Check if the popup goes off the left edge of the screen
        if (popupLeft < 10) { // 10px margin from the edge
            // If it goes off the left, position to the right instead
            popupLeft = iconRect.right + spacing;
            popup.classList.remove('point-right'); // Remove 'point-right' class (default arrow points left)
        }

        popup.style.left = `${popupLeft}px`;
        popup.style.top = `${popupTop}px`;

        // Adjust for vertical viewport boundaries if necessary
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        if (popupTop + popupHeight > viewportHeight - 10) { // If bottom goes off screen
            popup.style.top = `${viewportHeight - popupHeight - 10}px`;
        }
        if (popupTop < 10) { // If top goes off screen
            popup.style.top = '10px';
        }


        // Show the popup with a slight delay after positioning
        popup.classList.add('show');

        // Add glow to the icon
        ubIcon.classList.add('glow-pulse');

        // 6. Auto-hide logic
        const autoHideTimeout = setTimeout(() => {
            popup.classList.remove('show');
            // Remove glow after popup disappears (optional, could keep glowing)
            ubIcon.classList.remove('glow-pulse');
            setTimeout(() => {
                if (popup.parentNode) { // Check if popup still exists before removing
                    popup.remove();
                }
            }, 300); // Match CSS transition duration
        }, 12000); // Hide after 12 seconds

        // 7. Close button and icon click logic
        closeBtn.addEventListener('click', () => {
            clearTimeout(autoHideTimeout); // Stop auto-hide
            popup.classList.remove('show');
            ubIcon.classList.remove('glow-pulse'); // Remove glow immediately
            setTimeout(() => {
                if (popup.parentNode) { // Check if popup still exists before removing
                    popup.remove();
                }
            }, 300);
        });

        // Optional: If user clicks the icon, remove the popup too
        ubIcon.addEventListener('click', () => {
            if (popup.parentNode) { // Check if popup still exists
                clearTimeout(autoHideTimeout);
                popup.classList.remove('show');
                ubIcon.classList.remove('glow-pulse');
                setTimeout(() => {
                    if (popup.parentNode) { // Check if popup still exists before removing
                        popup.remove();
                    }
                }, 300);
            }
        });

    }, 1000); // Small delay to ensure everything is rendered
});