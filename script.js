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

// unblock-assistant.js

// unblock-assistant.js

// unblock-assistant.js

// unblock-assistant.js

document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('unblockAssistantOverlay');
    const popup = document.getElementById('unblockAssistantPopup');
    const contentDiv = document.getElementById('unblockAssistantContent');
    const prevBtn = document.getElementById('unblockPrevBtn');
    const nextBtn = document.getElementById('unblockNextBtn');
    const submitBtn = document.getElementById('unblockSubmitBtn');
    const progressBar = document.getElementById('unblockAssistantProgressBar');

    let currentStep = 0;
    const totalSteps = 9; // Intro (0) + 8 actual steps (1-8)
    let formData = {};

    const predefinedKeywordTestUrls = [
        { id: "edu-platform", name: "Educational Platform", url: "https://blooket1.com/educational-resource-platform" },
        { id: "learning-hub", name: "Learning Hub (Query)", url: "https://blooket1.com/?p=learning-hub" },
        { id: "academic-zone", name: "Academic Zone (Hash)", url: "https://blooket1.com/#academic-zone" },
        { id: "study-portals", name: "Study Portals (Subdomain)", url: "https://study.blooket1.com" },
        { id: "quiz-website", name: "Quiz Website (Keyword)", url: "https://blooket1.com/?kw=quiz-site" }
    ];

    function updateProgressBar() {
        const progress = (currentStep >= totalSteps - 1) ? 100 : (currentStep / (totalSteps - 2)) * 100;
        progressBar.style.width = `${progress}%`;
    }

    function closeAssistant() {
        overlay.classList.remove('active');
    }

    async function renderStep() {
        contentDiv.innerHTML = '';
        prevBtn.classList.add('hidden');
        nextBtn.classList.add('hidden');
        submitBtn.classList.add('hidden');
        const existingFinishBtn = document.getElementById('unblockFinishBtn');
        if (existingFinishBtn) existingFinishBtn.remove();

        switch (currentStep) {
            case 0:
                contentDiv.innerHTML = `
                    <h3>Welcome to the Unblock Assistant!</h3>
                    <p>It looks like our game might be blocked on your school's network. Don't worry, we're here to help!</p>
                    <p>This assistant will ask you a few simple questions and run some quick tests (with your help!) to figure out why it's blocked. This helps us create a special version just for you.</p>
                    <p>Ready to start?</p>
                `;
                nextBtn.textContent = 'Start Assistant →';
                nextBtn.classList.remove('hidden');
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
                        <input type="radio" name="siteAccess" value="partially" ${formData.siteAccess === 'partially' ? 'checked' : ''}> It loaded, but parts of the game didn't work (e.g., images missing, game won't start).
                    </label>
                `;
                prevBtn.classList.remove('hidden');
                nextBtn.textContent = 'Next →';
                nextBtn.classList.remove('hidden');
                break;

            case 2:
                contentDiv.innerHTML = `
                    <h3>Step 2: What message did you see?</h3>
                    <p>If the site was blocked, what did the message on your screen say? This is very important!</p>
                    <p><em>Examples: "Access Denied", "Blocked by School Policy", "Content Filtered", "Website Categorized as Games"</em></p>
                    <textarea id="blockMessage" placeholder="Type the exact message here..." rows="4">${formData.blockMessage || ''}</textarea>
                    <p>If you didn't see a message, just type "No message, just blank" or "Error loading page".</p>
                `;
                prevBtn.classList.remove('hidden');
                nextBtn.classList.remove('hidden');
                break;

            case 3:
                contentDiv.innerHTML = `
                    <h3>Step 3: Do you know your school's web filter?</h3>
                    <p>Many schools use a specific system to block websites. Sometimes, the block message will mention its name!</p>
                    <p>Have you seen any of these names, or do you know what your school uses?</p>
                    <label class="unblock-option">
                        <input type="radio" name="blockingSystem" value="lights_speed" ${formData.blockingSystem === 'lights_speed' ? 'checked' : ''}> Lightspeed Systems (Relay, Filter)
                    </label>
                    <label class="unblock-option">
                        <input type="radio" name="blockingSystem" value="go_guardian" ${formData.blockingSystem === 'go_guardian' ? 'checked' : ''}> GoGuardian
                    </label>
                    <label class="unblock-option">
                        <input type="radio" name="securly" ${formData.blockingSystem === 'securly' ? 'checked' : ''}> Securly
                    </label>
                    <label class="unblock-option">
                        <input type="radio" name="iboss" ${formData.blockingSystem === 'iboss' ? 'checked' : ''}> iboss
                    </label>
                    <label class="unblock-option">
                        <input type="radio" name="cisco_umbrella" ${formData.blockingSystem === 'cisco_umbrella' ? 'checked' : ''}> Cisco Umbrella
                    </label>
                    <label class="unblock-option">
                        <input type="radio" name="smooth_wall" ${formData.blockingSystem === 'smooth_wall' ? 'checked' : ''}> Smoothwall
                    </label>
                     <label class="unblock-option">
                        <input type="radio" name="zscaler" ${formData.blockingSystem === 'zscaler' ? 'checked' : ''}> Zscaler
                    </label>
                    <label class="unblock-option">
                        <input type="radio" name="i_dont_know" ${formData.blockingSystem === 'i_dont_know' ? 'checked' : ''}> I don't know / It's not listed here.
                    </label>
                    <textarea id="blockingSystemDetails" placeholder="If 'I don't know' or 'Other', please describe any details you might remember..." rows="2">${formData.blockingSystemDetails || ''}</textarea>
                `;
                prevBtn.classList.remove('hidden');
                nextBtn.classList.remove('hidden');
                break;

            case 4:
                contentDiv.innerHTML = `
                    <h3>Step 4: Test Different Unblock Links</h3>
                    <p>Some filters block websites based on certain words in the address (like "blooket"). Let's try loading a few links with different, more 'school-friendly' addresses to see if they work.</p>
                    <p class="instruction"><strong>For each link:</strong> Click it to open in a NEW tab. See what happens. Then, come back here and tell us if it loaded!</p>
                    <div class="keyword-test-area" id="predefinedTestsContainer">
                        <h4>Predefined Links:</h4>
                    </div>
                    <div class="keyword-test-area" style="margin-top: 25px;">
                        <h4>Try Your Own Keyword:</h4>
                        <p class="instruction">You can also enter your own keyword below (like 'quizizz', 'work', or a school website you know) and we'll generate a link for you to test.</p>
                        <div class="custom-keyword-input-container">
                            <input type="text" id="customKeywordInput" placeholder="e.g. quizizz, maths, docs.google.com" value="${formData.customKeywordTest?.keyword || ''}">
                            <button id="generateCustomLinkBtn">Generate Link</button>
                        </div>
                        <div id="customTestResultWrapper" class="custom-test-result-wrapper" style="display: none;">
                            <p>Try this link in a NEW tab:</p>
                            <a id="customTestGeneratedLink" href="#" target="_blank" class="test-link" style="background-color: #f39c12; margin-top: 5px;"></a>
                            <p style="margin-top: 15px;"><strong>What happened when you tried?</strong></p>
                            <div class="result-options">
                                <label><input type="radio" name="customTestResult" value="loaded" ${formData.customKeywordTest?.result === 'loaded' ? 'checked' : ''}> It loaded!</label>
                                <label><input type="radio" name="customTestResult" value="blocked" ${formData.customKeywordTest?.result === 'blocked' ? 'checked' : ''}> It was blocked.</label>
                                <label><input type="radio" name="customTestResult" value="error" ${formData.customKeywordTest?.result === 'error' ? 'checked' : ''}> It showed an error.</label>
                            </div>
                        </div>
                    </div>
                `;
                setupPredefinedTests();
                setupCustomKeywordTest();

                nextBtn.disabled = !checkAllKeywordTestsCompleted();
                prevBtn.classList.remove('hidden');
                nextBtn.classList.remove('hidden');
                break;

            case 5:
                contentDiv.innerHTML = `
                    <h3>Step 5: Tell us about your connection.</h3>
                    <p>Knowing more about your network helps us understand the blocking system.</p>
                    <p><strong>Where are you trying to play?</strong></p>
                    <label class="unblock-option">
                        <input type="radio" name="networkType" value="school-wifi" ${formData.networkType === 'school-wifi' ? 'checked' : ''}> School Wi-Fi / School Computer
                    </label>
                    <label class="unblock-option">
                        <input type="radio" name="networkType" value="home-wifi" ${formData.networkType === 'home-wifi' ? 'checked' : ''}> Home Wi-Fi
                    </label>
                    <label class="unblock-option">
                        <input type="radio" name="networkType" value="public-wifi" ${formData.networkType === 'public-wifi' ? 'checked' : ''}> Public Wi-Fi (e.g., library, cafe)
                    </label>
                    <label class="unblock-option">
                        <input type="radio" name="networkType" value="other" ${formData.networkType === 'other' ? 'checked' : ''}> Other (please describe below)
                    </label>
                    <textarea id="networkDetails" placeholder="If 'Other', please describe..." rows="2">${formData.networkDetails || ''}</textarea>

                    <p><strong>What type of device are you using?</strong></p>
                    <label class="unblock-option">
                        <input type="radio" name="deviceType" value="chromebook" ${formData.deviceType === 'chromebook' ? 'checked' : ''}> School Chromebook
                    </label>
                    <label class="unblock-option">
                        <input type="radio" name="windows" ${formData.deviceType === 'windows' ? 'checked' : ''}> Windows PC
                    </label>
                    <label class="unblock-option">
                        <input type="radio" name="mac" ${formData.deviceType === 'mac' ? 'checked' : ''}> Mac Computer
                    </label>
                    <label class="unblock-option">
                        <input type="radio" name="ipad" ${formData.deviceType === 'ipad' ? 'checked' : ''}> iPad
                    </label>
                    <label class="unblock-option">
                        <input type="radio" name="android-tablet" ${formData.deviceType === 'android-tablet' ? 'checked' : ''}> Android Tablet
                    </label>
                    <label class="unblock-option">
                        <input type="radio" name="phone" ${formData.deviceType === 'phone' ? 'checked' : ''}> Phone (Android/iPhone)
                    </label>
                    <label class="unblock-option">
                        <input type="radio" name="other" ${formData.deviceType === 'other' ? 'checked' : ''}> Other (please describe below)
                    </label>
                    <textarea id="deviceDetails" placeholder="If 'Other', please describe..." rows="2">${formData.deviceDetails || ''}</textarea>
                `;
                prevBtn.classList.remove('hidden');
                nextBtn.classList.remove('hidden');
                break;

            case 6:
                contentDiv.innerHTML = `
                    <h3>Step 6: Review and Send!</h3>
                    <p>You're almost done! Please review the information below. If everything looks good, click 'Send Report'!</p>
                    <div class="step-summary">
                        <p><b>Main Site Access:</b> ${formData.siteAccess === 'yes' ? 'Yes, loaded' : formData.siteAccess === 'no' ? 'No, blocked' : formData.siteAccess === 'partially' ? 'Partially loaded' : 'Not answered'}</p>
                        <p><b>Block Message:</b> ${formData.blockMessage || 'N/A'}</p>
                        <p><b>Blocking System:</b> ${formData.blockingSystem === 'i_dont_know' ? 'I don\'t know' : formData.blockingSystem || 'Not answered'}</p>
                        ${formData.blockingSystemDetails ? `<p><b>Blocking System Details:</b> ${formData.blockingSystemDetails}</p>` : ''}
                        <h4>Predefined Link Tests:</h4>
                        <ul style="list-style: disc; margin-left: 20px;">
                            ${predefinedKeywordTestUrls.map(test => `<li><b>${test.name}:</b> ${formData.predefinedKeywordTests?.[test.id]?.result || 'Not tested'}</li>`).join('')}
                        </ul>
                        <h4>Custom Keyword Test:</h4>
                        <p><b>Keyword Tried:</b> ${formData.customKeywordTest?.keyword || 'None'}</p>
                        <p><b>Test Result:</b> ${formData.customKeywordTest?.result || 'Not tested'}</p>
                        ${formData.customKeywordTest?.url ? `<p><b>Test URL:</b> ${formData.customKeywordTest.url}</p>` : ''}
                        <p><b>Network Type:</b> ${formData.networkType || 'Not answered'}</p>
                        ${formData.networkDetails ? `<p><b>Network Details:</b> ${formData.networkDetails}</p>` : ''}
                        <p><b>Device Type:</b> ${formData.deviceType || 'Not answered'}</p>
                        ${formData.deviceDetails ? `<p><b>Device Details:</b> ${formData.deviceDetails}</p>` : ''}
                    </div>
                    <p>This information is super helpful for us to find a way to get Blooket unblocked for you!</p>
                `;
                prevBtn.classList.remove('hidden');
                submitBtn.classList.remove('hidden');
                break;

            case 7: // Final Success Case for "Everything's Working"
                contentDiv.innerHTML = `
                    <h3>Great News! Everything's Working!</h3>
                    <p style="text-align: center; color: #28a745;">It looks like blooket1.com loaded fine for you, so the game should be unblocked!</p>
                    <p style="text-align: center;">You can close this assistant and go enjoy the game!</p>
                    <p style="text-align: center; font-size: 0.9em; color: #555;">(If you're still having issues despite this message, please try running the assistant again and selecting 'Partially loaded' in Step 1.)</p>
                `;
                const finishBtn = document.createElement('button');
                finishBtn.id = 'unblockFinishBtn';
                finishBtn.textContent = 'Finish & Close';
                finishBtn.style.backgroundColor = '#28a745';
                finishBtn.style.marginLeft = 'auto';
                finishBtn.style.marginRight = 'auto';
                finishBtn.onclick = closeAssistant;
                document.getElementById('unblockAssistantButtons').appendChild(finishBtn);
                break;

            case 8: // "Sorry, couldn't unblock" message (NEW)
                contentDiv.innerHTML = `
                    <h3>Sorry, We Couldn't Find a Solution Yet.</h3>
                    <p style="text-align: center; color: #dc3545;">Based on the information you provided and the tests run, we couldn't find an immediate way to unblock the site for you at this time.</p>
                    <p style="text-align: center;">However, we've sent your detailed report to our team. This information is incredibly valuable and will help us research and develop new unblocking methods for situations like yours!</p>
                    <p style="text-align: center;">Please check back later or keep an eye on our website for updates.</p>
                `;
                 const failCloseBtn = document.createElement('button');
                failCloseBtn.id = 'unblockFinishBtn';
                failCloseBtn.textContent = 'Close';
                failCloseBtn.style.backgroundColor = '#95a5a6';
                failCloseBtn.style.marginLeft = 'auto';
                failCloseBtn.style.marginRight = 'auto';
                failCloseBtn.onclick = closeAssistant;
                document.getElementById('unblockAssistantButtons').appendChild(failCloseBtn);
                break;

            case 9: // Submission confirmation/loading
                contentDiv.innerHTML = `
                    <h3>Sending Your Report...</h3>
                    <div class="spinner"></div>
                    <p style="text-align: center;">Please wait, we're sending your details to our team.</p>
                `;
                break;

            case 10: // Success or Error after report submission
                contentDiv.innerHTML = `
                    <h3>Thank You!</h3>
                    <p style="text-align: center;">Your report has been successfully sent. We'll analyze the information and work on a solution to unblock the game for you.</p>
                    <p style="text-align: center;">Please keep an eye on this page for updates or a new link specifically for your situation.</p>
                    <p style="text-align: center;">You can now close this window.</p>
                `;
                const finalCloseBtn = document.createElement('button');
                finalCloseBtn.id = 'unblockFinishBtn';
                finalCloseBtn.textContent = 'Close';
                finalCloseBtn.style.backgroundColor = '#95a5a6';
                finalCloseBtn.style.marginLeft = 'auto';
                finalCloseBtn.style.marginRight = 'auto';
                finalCloseBtn.onclick = closeAssistant;
                document.getElementById('unblockAssistantButtons').appendChild(finalCloseBtn);
                break;
        }

        updateProgressBar();
    }

    function collectData() {
        if (currentStep === 1) {
            const selected = document.querySelector('input[name="siteAccess"]:checked');
            formData.siteAccess = selected ? selected.value : '';
        } else if (currentStep === 2) {
            formData.blockMessage = document.getElementById('blockMessage').value.trim();
        } else if (currentStep === 3) {
            const selected = document.querySelector('input[name="blockingSystem"]:checked');
            formData.blockingSystem = selected ? selected.value : '';
            formData.blockingSystemDetails = document.getElementById('blockingSystemDetails').value.trim();
        } else if (currentStep === 4) {
            formData.predefinedKeywordTests = {};
            predefinedKeywordTestUrls.forEach(test => {
                const resultRadio = document.querySelector(`input[name="predefinedTest-${test.id}"]:checked`);
                if (resultRadio) {
                    formData.predefinedKeywordTests[test.id] = {
                        url: test.url,
                        result: resultRadio.value
                    };
                } else if (formData.predefinedKeywordTests[test.id] === undefined) {
                    // Ensure all tests are represented even if not interacted with yet
                    formData.predefinedKeywordTests[test.id] = { url: test.url, result: 'not_tested' };
                }
            });

            const customKeywordInput = document.getElementById('customKeywordInput');
            const customTestResultRadio = document.querySelector('input[name="customTestResult"]:checked');
            if (customKeywordInput && customKeywordInput.value.trim()) {
                formData.customKeywordTest = {
                    keyword: customKeywordInput.value.trim(),
                    url: `https://blooket1.com/?kw=${encodeURIComponent(customKeywordInput.value.trim())}`,
                    result: customTestResultRadio ? customTestResultRadio.value : 'not_reported'
                };
            } else {
                formData.customKeywordTest = null; // No custom test attempted
            }
        } else if (currentStep === 5) {
            const networkType = document.querySelector('input[name="networkType"]:checked');
            formData.networkType = networkType ? networkType.value : '';
            formData.networkDetails = document.getElementById('networkDetails').value.trim();

            const deviceType = document.querySelector('input[name="deviceType"]:checked');
            formData.deviceType = deviceType ? deviceType.value : '';
            formData.deviceDetails = document.getElementById('deviceDetails').value.trim();
        }
    }

    function validateStep() {
        if (currentStep === 1) {
            return !!document.querySelector('input[name="siteAccess"]:checked');
        } else if (currentStep === 2) {
            return formData.blockMessage && formData.blockMessage.length > 5;
        } else if (currentStep === 3) {
            const systemSelected = !!document.querySelector('input[name="blockingSystem"]:checked');
            if (!systemSelected) return false;
            return true;
        } else if (currentStep === 4) {
            return checkAllKeywordTestsCompleted();
        } else if (currentStep === 5) {
            const networkSelected = !!document.querySelector('input[name="networkType"]:checked');
            const deviceSelected = !!document.querySelector('input[name="deviceType"]:checked');
            if (!networkSelected || !deviceSelected) return false;
            if (formData.networkType === 'other' && !formData.networkDetails) return false;
            if (formData.deviceType === 'other' && !formData.deviceDetails) return false;
            return true;
        }
        return true;
    }

    // --- Keyword Test Logic (Manual Links) ---
    function setupPredefinedTests() {
        const container = document.getElementById('predefinedTestsContainer');
        if (!container) return;

        container.innerHTML = '<h4>Predefined Links:</h4>';

        if (!formData.predefinedKeywordTests) {
            formData.predefinedKeywordTests = {};
        }

        predefinedKeywordTestUrls.forEach(test => {
            const testItem = document.createElement('div');
            testItem.classList.add('test-item');
            testItem.innerHTML = `
                <div class="test-link-wrapper">
                    <span>${test.name}:</span>
                    <a href="${test.url}" target="_blank" class="test-link">${test.url.replace(/^https:\/\/(www\.)?/, '').replace(/\/$/, '')}</a>
                </div>
                <div class="result-options">
                    <label><input type="radio" name="predefinedTest-${test.id}" value="loaded" ${formData.predefinedKeywordTests[test.id]?.result === 'loaded' ? 'checked' : ''}> It loaded!</label>
                    <label><input type="radio" name="predefinedTest-${test.id}" value="blocked" ${formData.predefinedKeywordTests[test.id]?.result === 'blocked' ? 'checked' : ''}> It was blocked.</label>
                    <label><input type="radio" name="predefinedTest-${test.id}" value="error" ${formData.predefinedKeywordTests[test.id]?.result === 'error' ? 'checked' : ''}> It showed an error.</label>
                </div>
                <div id="result-message-${test.id}" class="result-message" style="display: none;"></div>
            `;
            container.appendChild(testItem);

            testItem.querySelectorAll(`input[name="predefinedTest-${test.id}"]`).forEach(radio => {
                radio.addEventListener('change', (event) => {
                    formData.predefinedKeywordTests[test.id] = { url: test.url, result: event.target.value };
                    updateTestResultMessage(test.id, event.target.value);
                    nextBtn.disabled = !checkAllKeywordTestsCompleted();
                });
            });

            if (formData.predefinedKeywordTests[test.id]?.result) {
                updateTestResultMessage(test.id, formData.predefinedKeywordTests[test.id].result);
            } else {
                formData.predefinedKeywordTests[test.id] = { url: test.url, result: undefined };
            }
        });
    }

    function updateTestResultMessage(testId, result) {
        const messageDiv = document.getElementById(`result-message-${testId}`);
        if (!messageDiv) return;

        messageDiv.style.display = 'block';
        messageDiv.classList.remove('success', 'fail', 'pending', 'not-tested');

        if (result === 'loaded') {
            messageDiv.classList.add('success');
            messageDiv.textContent = 'Great! This link loaded successfully!';
        } else if (result === 'blocked') {
            messageDiv.classList.add('fail');
            messageDiv.textContent = 'Oops! This link was blocked.';
        } else if (result === 'error') {
            messageDiv.classList.add('fail');
            messageDiv.textContent = 'Something went wrong when trying this link.';
        } else {
            messageDiv.classList.add('not-tested');
            messageDiv.textContent = 'No result reported yet.';
        }
    }

    function setupCustomKeywordTest() {
        const customKeywordInput = document.getElementById('customKeywordInput');
        const generateCustomLinkBtn = document.getElementById('generateCustomLinkBtn');
        const customTestResultWrapper = document.getElementById('customTestResultWrapper');
        const customTestGeneratedLink = document.getElementById('customTestGeneratedLink');

        if (formData.customKeywordTest && formData.customKeywordTest.url) {
            customTestResultWrapper.style.display = 'block';
            customTestGeneratedLink.href = formData.customKeywordTest.url;
            customTestGeneratedLink.textContent = formData.customKeywordTest.url.replace(/^https:\/\/(www\.)?/, '').replace(/\/$/, '');
        }

        generateCustomLinkBtn.onclick = () => {
            const keyword = customKeywordInput.value.trim();
            if (!keyword) {
                alert('Please enter a keyword to generate a link!');
                return;
            }
            const generatedUrl = `https://blooket1.com/?kw=${encodeURIComponent(keyword)}`;
            customTestGeneratedLink.href = generatedUrl;
            customTestGeneratedLink.textContent = generatedUrl.replace(/^https:\/\/(www\.)?/, '').replace(/\/$/, '');
            customTestResultWrapper.style.display = 'block';

            formData.customKeywordTest = {
                keyword: keyword,
                url: generatedUrl,
                result: undefined
            };
            document.querySelectorAll('input[name="customTestResult"]').forEach(radio => radio.checked = false);
            nextBtn.disabled = !checkAllKeywordTestsCompleted();
        };

        document.querySelectorAll('input[name="customTestResult"]').forEach(radio => {
            radio.addEventListener('change', (event) => {
                if (formData.customKeywordTest) {
                    formData.customKeywordTest.result = event.target.value;
                }
                nextBtn.disabled = !checkAllKeywordTestsCompleted();
            });
        });
    }

    function checkAllKeywordTestsCompleted() {
        const allPredefinedTested = predefinedKeywordTestUrls.every(test =>
            formData.predefinedKeywordTests && formData.predefinedKeywordTests[test.id] && formData.predefinedKeywordTests[test.id].result !== undefined
        );

        const customTestKeywordsEntered = document.getElementById('customKeywordInput')?.value.trim() !== '';
        const customTestResultGiven = formData.customKeywordTest && formData.customKeywordTest.result !== undefined;

        // Condition: Either all predefined tests have a result OR a custom keyword was entered AND a result for it was given
        // This ensures the user must interact with at least one test type.
        return allPredefinedTested || (customTestKeywordsEntered && customTestResultGiven);
    }


    nextBtn.addEventListener('click', async () => {
        if (currentStep === 1) {
            collectData();
            if (formData.siteAccess === 'yes') {
                currentStep = totalSteps - 2; // Jump directly to the "Everything's Working" step (case 7)
                renderStep();
                return;
            }
            if (!validateStep()) {
                alert('Please fill out all required information for this step before proceeding!');
                return;
            }
        }
        else if (currentStep > 0 && currentStep < totalSteps - 1) {
            collectData();
            if (!validateStep()) {
                alert('Please fill out all required information for this step before proceeding!');
                return;
            }
        }

        // Before advancing from Step 4 (keyword tests), check if any unblocked
        if (currentStep === 4) {
            const anyPredefinedLoaded = predefinedKeywordTestUrls.some(test => formData.predefinedKeywordTests?.[test.id]?.result === 'loaded');
            const customLoaded = formData.customKeywordTest?.result === 'loaded';

            if (!anyPredefinedLoaded && !customLoaded) {
                currentStep = totalSteps - 1; // Case 8: "Sorry, couldn't unblock"
                renderStep();
                return;
            }
        }


        if (currentStep < totalSteps - 1) {
            currentStep++;
            await renderStep();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentStep > 0) {
            if (currentStep === totalSteps - 2) {
                currentStep = 1;
            }
            else if (currentStep === totalSteps - 1) {
                currentStep = 4;
            }
            else if (currentStep === totalSteps || currentStep === totalSteps + 1) {
                currentStep = totalSteps - 3;
            }
            else {
                collectData();
                currentStep--;
            }
            renderStep();
        }
    });

    submitBtn.addEventListener('click', async () => {
        collectData();
        currentStep = totalSteps - 1; // Change to loading step (case 9)
        renderStep();

        const WEBHOOK_ENDPOINT_URL = 'https://b1ubsubmission.blaub002-302.workers.dev/'; // Your Worker URL!

        try {
            const response = await fetch(WEBHOOK_ENDPOINT_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userAgent: navigator.userAgent,
                    timestamp: new Date().toISOString(),
                    currentUrl: window.location.href,
                    ...formData,
                }),
            });

            if (response.ok) {
                console.log('Report sent successfully:', formData);
                currentStep = totalSteps;
            } else {
                console.error('Failed to send report:', response.status, response.statusText);
                let errorMessage = `Failed to send report (${response.status} ${response.statusText}).`;
                if (response.status === 0 || response.status === 400 || response.status === 401 || response.status === 403 || response.status === 404 || response.status === 500) {
                    // Specific errors like 0 (network/CORS), or typical server errors
                    errorMessage = `Oops! We couldn't send your report right now. This might be due to a network filter or a temporary issue.`;
                }
                contentDiv.innerHTML = `
                    <h3>Oops! Something Went Wrong.</h3>
                    <p style="text-align: center; color: red;">${errorMessage}</p>
                    <p style="text-align: center;">Please try again later. If the problem continues, your school's filter might be blocking report submission too.</p>
                    <p style="text-align: center;">You can try emailing us directly at your-support-email@example.com with the details you noted down from the review step.</p>
                `;
                const errorCloseBtn = document.createElement('button');
                errorCloseBtn.id = 'unblockFinishBtn';
                errorCloseBtn.textContent = 'Close';
                errorCloseBtn.style.backgroundColor = '#95a5a6';
                errorCloseBtn.style.marginLeft = 'auto';
                errorCloseBtn.style.marginRight = 'auto';
                errorCloseBtn.onclick = closeAssistant;
                document.getElementById('unblockAssistantButtons').appendChild(errorCloseBtn);
            }
        } catch (error) {
            console.error('Network Error during report submission:', error);
            // This 'TypeError: Failed to fetch' is usually a CORS or network block
            let errorMessage = `A network error occurred. This often means your school's filter is blocking our connection.`;
            if (error.name === 'TypeError' && error.message === 'Failed to fetch') {
                errorMessage += ` (Commonly caused by network filters or browser security settings.)`;
            } else {
                errorMessage += ` Details: ${error.message}`;
            }

            contentDiv.innerHTML = `
                <h3>Oops! Something Went Wrong.</h3>
                <p style="text-align: center; color: red;">${errorMessage}</p>
                <p style="text-align: center;">Please try again later. If the problem continues, you might need to email us directly with the details you noted down from the review step.</p>
                <p style="text-align: center;">Email: <a href="mailto:your-support-email@example.com">your-support-email@example.com</a></p>
            `;
            const networkErrorCloseBtn = document.createElement('button');
            networkErrorCloseBtn.id = 'unblockFinishBtn';
            networkErrorCloseBtn.textContent = 'Close';
            networkErrorCloseBtn.style.backgroundColor = '#95a5a6';
            networkErrorCloseBtn.style.marginLeft = 'auto';
            networkErrorCloseBtn.style.marginRight = 'auto';
            networkErrorCloseBtn.onclick = closeAssistant;
            document.getElementById('unblockAssistantButtons').appendChild(networkErrorCloseBtn);
        } finally {
            prevBtn.classList.add('hidden');
            nextBtn.classList.add('hidden');
            submitBtn.classList.add('hidden');
            if (currentStep === totalSteps) {
                renderStep();
            }
        }
    });

    contentDiv.addEventListener('change', (event) => {
        if (event.target.type === 'radio' || event.target.type === 'checkbox') {
            if (!event.target.name.startsWith('predefinedTest-') && event.target.name !== 'customTestResult') {
                collectData();
            }
        }
    });
    contentDiv.addEventListener('input', (event) => {
        if (event.target.tagName === 'TEXTAREA' || (event.target.type === 'text' && event.target.id !== 'customKeywordInput')) {
            collectData();
        }
    });

    // --- Overlay Click to Close ---
    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
            closeAssistant();
        }
    });

    window.startUnblockAssistant = () => {
        currentStep = 0;
        formData = {};
        overlay.classList.add('active');
        renderStep();
    };
});

document.addEventListener("DOMContentLoaded", function () {
  const CURRENT_DOMAIN = location.hostname; // Gets current domain

  // Only show the popup if on blooket1.pages.dev and migration hasn't been shown before
  if (CURRENT_DOMAIN === "blooket1.pages.dev") {
      // Create the migration popup
      const popup = document.createElement("div");
      popup.id = "migration-popup";
      popup.innerHTML = `
          <p style="font-weight: bold; color: red;">Important: Blooket1.pages.dev will be taken down soon! Please migrate to blooket1.com.</p>
          <p>If you encounter any issues, please email us at <a href="mailto:info.blooket1@gmail.com">info.blooket1@gmail.com</a>.</p>
          <button id="redirect-btn">Go to blooket1.com</button>
      `;
      document.body.appendChild(popup);

      // Handle button click for redirect
      document.getElementById("redirect-btn").onclick = function () {
          window.location.href = "https://blooket1.com";
      };
  }
});

// feature-popup.js

// feature-popup.js

// feature-popup.js

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