export const trustedTests = [
  {
    'Test Name': 'Alt-version',
    'Test ID': '1.A',
    'Test Category': 'Alternate version',
    'WCAG SC': ['Requirements'],
    Level: '',
    'Test Conditions': [
      'There is an alternative version for inaccessible content.',
      'The accessible version is up to date with the same information and functionality. 3. The mechanism to reach the accessible equivalent version from the non-conforming page is accessible.',
    ],
    Notes:
      'TT tests: 1.A, 1.B, 1.C. The alternate version can apply to the entire site, a single subpage or a specific element on the page. All alternative versions should be listed here',
    'Disability Impact':
      'Without Vision, With Limited Vision, Without Perception of Color, Without Hearing, With Limited Hearing, Without Speech, With Limited Manipulation, With Limited Language, Cognitive and Learning Abilities, Photosensitive Epilepsy / Photosensitive Seizure Disorders',
  },
  {
    'Test Name': '1.4.2-Audio-control',
    'Test ID': '2.A',
    'Test Category': 'Autoplay/update',
    'WCAG SC': ['1.4.2'],
    'axe-rules': false, // all by WCAG SC
    Level: 'A',
    'Test Conditions': [
      'The user can pause, stop, or control the volume of audio content that plays automatically. ',
    ],
    'Sufficient Techniques': [
      'Playing a sound that turns off automatically within three seconds',
      'Providing a control near the beginning of the Web page that turns off sounds that play automatically',
      'Playing sounds only on user request',
    ],
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Hearing, With Limited Language, Cognitive and Learning Abilities',
    Axe: 'no-autoplay-audio',
  },
  {
    'Test Name': '2.2.2-pause-stop-hide',
    'Test ID': '2.B.custom',
    'Test Category': 'Autoplay/update',
    'WCAG SC': '2.2.2',
    'axe-rules': false, // all by WCAG SC
    Level: 'A',
    'Test Conditions': [
      'The user can pause, stop, or hide moving, blinking, or scrolling content that 1) start automatically, 2) lasts more than five seconds and 3) is presented in parallel with other content unless the movement, blinking, or scrolling is part of an activity where it is essential',
      'The user can pause, stop, hide, or control the frequency of automatically updating content.',
    ],
    'Sufficient Techniques': [
      'Allowing the content to be paused and restarted from where it was paused',
      'Using script to scroll content, and providing a mechanism to pause it',
      'Content (including gif images) blinks for less than 5 seconds',
      'Using a technology to include blinking content that can be turned off via the user agent',
      'Using a control in the Web page that stops moving, blinking or auto-updating content',
    ],
    Note: 'TT 2.B and 2.C',
    'Disability Impact':
      'Photosensitive Epilepsy / Photosensitive Seizure Disorders, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '4.1.2-change-notify-auto',
    'Test ID': '2.D',
    'Test Category': 'Autoplay/update',
    'WCAG SC': '4.1.2',
    'axe-rules': null, // no axe rule appropriate for this issue
    Level: 'A',
    'Test Conditions': [
      'The page provides notification of each automatic update/change in content or other mechanism that inform user about changes.',
    ],
    'Sufficient Techniques': [
      'Use live region to inform user about content changes',
      'Use proper role to inform user agent about content changes',
      'Move focus to content that change/update/appears on the page',
      'Use additional instruction to inform user about content changes',
    ],
    Note: '',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '2.3.1-flashing',
    'Test ID': '3.A',
    'Test Category': 'Flashing',
    'WCAG SC': '2.3.1',
    'axe-rules': false, // all by WCAG SC if exist
    Level: 'A',
    'Test Conditions': [
      'If NO flashing content is found, then this Test Condition is DOES NOT APPLY (Requirements). If flashing content IS found, then this test should be recorded as NOT TESTED.',
    ],
    'Sufficient Techniques': [
      'Ensuring that no component of the content flashes more than three times in any 1-second period',
      'Keeping the flashing area small enough (25% of any 10 degree visual field), see: https://www.w3.org/WAI/WCAG21/Techniques/general/G176',
      'Using a tool to ensure that content does not violate the general flash threshold or red flash threshold, see: https://www.w3.org/WAI/WCAG21/Techniques/general/G15',
    ],
    Note: '',
    'Disability Impact':
      'Photosensitive Epilepsy / Photosensitive Seizure Disorders',
  },
  {
    'Test Name': '2.1.1-keyboard-access',
    'Test ID': '4.A.custom',
    'Test Category': 'Keyboard/focus',
    'WCAG SC': '2.1.1',
    'axe-rules': false, // all by WCAG SC if exist
    Level: 'A',
    'Test Conditions': [
      'All functionality can be accessed and executed using only the keyboard.',
    ],
    'Sufficient Techniques': [
      'Ensuring keyboard control for all functionality',
      'Providing keyboard-triggered event handlers when not provided with role element by default',
    ],
    Note: '',
    'Disability Impact':
      'Without Vision, With Limited Language, Cognitive and Learning Abilities, With Limited Vision, With Limited Manipulation',
  },
  {
    'Test Name': '2.1.1-no-keystroke-timing',
    'Test ID': '4.B',
    'Test Category': 'Keyboard/focus',
    'WCAG SC': '2.1.1',
    'axe-rules': null, // no axe rule appropriate for this issue
    Level: 'A',
    'Test Conditions': [
      'Individual keystrokes do not require specific timings for activation of functionality.',
    ],
    'Sufficient Techniques': [
      'Ensuring alternative, no time limited keyboard method for the action',
      'Provide a mechanism to pause time limitation',
    ],
    Note: '',
    'Disability Impact':
      'Without Vision, With Limited Language, Cognitive and Learning Abilities, With Limited Vision, With Limited Manipulation',
  },
  {
    'Test Name': '2.1.2-no-keyboard-trap',
    'Test ID': '4.C',
    'Test Category': 'Keyboard/focus',
    'WCAG SC': '2.1.2',
    'axe-rules': false, // all by WCAG SC if exist
    Level: 'A',
    'Test Conditions': ['There is no keyboard trap.'],
    'Sufficient Techniques': [
      'Ensuring that users are not trapped in content.',
      'If focus move inside the element, ensuring keyboard action to move outside - close button or escape key accessible',
    ],
    Note: '',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Manipulation',
  },
  {
    'Test Name': '2.4.7-focus-visible',
    'Test ID': '4.D',
    'Test Category': 'Keyboard/focus',
    'WCAG SC': '2.4.7',
    'axe-rules': false, // all by WCAG SC if exist
    Level: 'AA',
    'Test Conditions':
      'A visible indication of focus is provided when focus is on the interface component.',
    'Sufficient Techniques': [
      'Using user interface components that are highlighted by the user agent when they receive focus',
      'Using CSS to change the presentation of a user interface component when it receives focus',
      'Using the default focus indicator for the platform so that high visibility default focus indicators will carry over',
      'Using an author-supplied, visible focus indicator',
      'Creating a two-color focus indicator to ensure sufficient contrast with all components',
      'Using script to change the background color or border of the element with focus - not recommended, only if no other technique is possible to apply',
    ],
    Note: '',
    'Disability Impact':
      'With Limited Vision, With Limited Manipulation, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '3.2.1-on-focus',
    'Test ID': '4.E',
    'Test Category': 'Keyboard/focus',
    'WCAG SC': '3.2.1',
    'axe-rules': false, // all by WCAG SC if exist
    Level: 'A',
    'Test Conditions':
      'When an interface component receives focus, it does not initiate an unexpected change of context.',
    'Sufficient Techniques': [
      'Using "activate" rather than "focus" as a trigger for changes of context',
    ],
    Note: '',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '2.4.3-focus-order-meaning',
    'Test ID': '4.F',
    'Test Category': 'Keyboard/focus',
    'WCAG SC': '2.4.3',
    'axe-rules': false, // all by WCAG SC if exist
    Level: 'A',
    'Test Conditions': [
      'The focus order preserves the meaning and operability of the web page.',
    ],
    'Sufficient Techniques': [
      'Placing the interactive elements in an order that follows sequences and relationships within the content',
      'Making the DOM order match the visual order',
      'Creating Custom Dialogs in a Device Independent Way and control focus',
      'Reordering page sections using the Document Object Model',
    ],
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Manipulation, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '2.4.3-focus-order-reveal',
    'Test ID': '4.G',
    'Test Category': 'Keyboard/focus',
    'WCAG SC': '2.4.3',
    Level: 'A',
    'Test Conditions': ['Focus is moved to revealed content.'],
    Note: '',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Manipulation, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '2.4.3-focus-order-return',
    'Test ID': '4.H',
    'Test Category': 'Keyboard/focus',
    'WCAG SC': '2.4.3',
    Level: 'A',
    'Test Conditions': 'Focus is returned to the logical sequence.',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Manipulation, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '3.3.2-label-provided',
    'Test ID': '5.A',
    'Test Category': 'Forms',
    'WCAG SC': '3.3.2',
    Level: 'A',
    'Test Conditions': 'Labels or instructions are provided for form elements.',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '2.4.6-label-descriptive',
    'Test ID': '5.B',
    'Test Category': 'Forms',
    'WCAG SC': '2.4.6',
    Level: 'AA',
    'Test Conditions': 'Each form label is sufficiently descriptive. ',
    'Disability Impact':
      "Without Vision, With Limited Vision, With Limited Manipulation','With Limited Language, Cognitive and Learning Abilities",
  },
  {
    'Test Name': '1.3.1-programmatic-label',
    'Test ID': '5.C',
    'Test Category': 'Forms',
    'WCAG SC': ['1.3.1', '4.1.2'],
    Level: 'A',
    'Test Conditions':
      'The combination of the accessible name, accessible description, and other programmatic associations (e.g., table column and/or row associations) describes each input field and includes all relevant instructions and cues (textual and graphical).',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '3.2.2-on-input',
    'Test ID': '5.D',
    'Test Category': 'Forms',
    'WCAG SC': '3.2.2',
    Level: 'A',
    'Test Conditions':
      'Changing field values/selections (e.g., entering data in a text field, changing a radio button section) does NOT initiate and unexpected change of context.',
    'Disability Impact':
      'Without Vision, Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '4.1.2-change-notify-form',
    'Test ID': '5.E ',
    'Test Category': 'Forms',
    'WCAG SC': '4.1.2',
    Level: 'A',
    'Test Conditions':
      'The page provides notification of each form-related change in content.',
    'Disability Impact':
      "Without Vision, With Limited Vision','With Limited Language, Cognitive and Learning Abilities",
  },
  {
    'Test Name': '3.3.1-error-identification',
    'Test ID': '5.F ',
    'Test Category': 'Forms ',
    'WCAG SC': '3.3.1',
    Level: 'A',
    'Test Conditions':
      'The item in error is identified in text and sufficiently described to the user in text.',
    'Disability Impact':
      "Without Vision, With Limited Vision','Without Perception of Color, With Limited Language, Cognitive and Learning Abilities",
  },
  {
    'Test Name': '3.3.3-error-suggestion',
    'Test ID': '5.G ',
    'Test Category': 'Forms',
    'WCAG SC': '3.3.3',
    Level: 'AA',
    'Test Conditions':
      'Guidance (e.g., suggestion for corrected input) is provided about how to correct errors for form fields.',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Manipulation, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '3.3.4-error-prevention',
    'Test ID': '5.H ',
    'Test Category': 'Forms',
    'WCAG SC': '3.3.4',
    Level: 'AA',
    'Test Conditions':
      'The web page allows the user to check, reverse, and/or confirm submission.',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Manipulation, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '2.4.4-link-purpose',
    'Test ID': '6.A',
    'Test Category': 'Links/buttons',
    'WCAG SC': '2.4.4',
    Level: 'A',
    'Test Conditions':
      'The purpose of each link or button can be determined from any combination of the link/button text, accessible name, accessible description, and/or programmatically determined link/button context.',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Manipulation, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '4.1.2-change-notify-links',
    'Test ID': '6.B',
    'Test Category': 'Links/buttons',
    'WCAG SC': '4.1.2',
    Level: 'A',
    'Test Conditions':
      'The page provides notification of each change in content that is the result of interaction with a link or button.',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '1.1.1-meaningful-image-name',
    'Test ID': '7.A',
    'Test Category': 'Images',
    'WCAG SC': '1.1.1',
    Level: 'A',
    'Test Conditions':
      'The accessible name and accessible description for a meaningful image provides an equivalent description of the image.',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '1.1.1-decorative-image',
    'Test ID': '7.B',
    'Test Category': 'Images',
    'WCAG SC': '1.1.1',
    Level: 'A',
    'Test Conditions':
      'There is no accessible name and accessible description for a decorative image.',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '1.1.1-decorative-background-image',
    'Test ID': '7.C',
    'Test Category': 'Images',
    'WCAG SC': '1.1.1',
    Level: 'A',
    'Test Conditions':
      'The background image is not the only means used to convey important information.',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '1.1.1-captcha-alternative',
    'Test ID': '7. D',
    'Test Category': 'Images',
    'WCAG SC': '1.1.1',
    Level: 'A',
    'Test Conditions': 'Alternative forms of CAPTCHA are provided.',
    'Disability Impact':
      'Without Vision, With Limited Vision, Without Hearing, With Limited Hearing, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '1.4.5-image-of-text',
    'Test ID': '7.E',
    'Test Category': 'Images',
    'WCAG SC': '1.4.5',
    Level: 'AA',
    'Test Conditions':
      'The image of text cannot be replaced by text or is customizable.',
    'Disability Impact':
      'Without Vision, With Limited Vision, Without Perception of Color, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '2.2.1-timing-adjustable',
    'Test ID': '8.A ',
    'Test Category': 'Adjustable time limits',
    'WCAG SC': '2.2.1',
    Level: 'A',
    'Test Conditions':
      'The user can turn off, adjust, or extend the time limit.',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Manipulation, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '2.4.1-bypass-function',
    'Test ID': '9.A',
    'Test Category': 'Repetitive Content',
    'WCAG SC': '2.4.1',
    Level: 'A',
    'Test Conditions':
      'A keyboard-accessible method is provided to bypass repetitive content.',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Manipulation, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '3.2.3-consistent- navigation',
    'Test ID': '9.B',
    'Test Category': 'Repetitive Content',
    'WCAG SC': '3.2.3',
    Level: 'AA',
    'Test Conditions':
      'Each navigational element occurs in the same relative order with regard to other repeated components on each web page where it appears.',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '3.2.4-consistent-identification',
    'Test ID': '9.C',
    'Test Category': 'Repetitive Content',
    'WCAG SC': '3.2.4',
    Level: 'AA',
    'Test Conditions':
      'The accessible name and description is consistent for components that perform the same function.',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '2.4.6-heading-purpose',
    'Test ID': '10.A',
    'Test Category': 'Content Structure',
    'WCAG SC': '2.4.6',
    Level: 'AA',
    'Test Conditions':
      'Each heading describes the topic or purpose of its content.',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '1.3.1-heading-determinable',
    'Test ID': '10.B ',
    'Test Category': 'Content Structure',
    'WCAG SC': '1.3.1',
    Level: 'A',
    'Test Conditions':
      'Each programmatically determinable heading is a visual heading and each visual heading is programmatically determinable.',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '1.3.1-heading-level',
    'Test ID': '10.C',
    'Test Category': 'Content Structure',
    'WCAG SC': '1.3.1',
    Level: 'A',
    'Test Conditions':
      'Programmatic heading levels logically match the visual heading presentation within the heading structure.',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '1.3.1-list-type',
    'Test ID': '10.D',
    'Test Category': 'Content Structure',
    'WCAG SC': '1.3.1',
    Level: 'A',
    'Test Conditions':
      'All visually apparent lists are programmatically identified according to their type.',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '3.1.1-page-language-defined',
    'Test ID': '11.A ',
    'Test Category': 'Language',
    'WCAG SC': '3.1.1',
    Level: 'A',
    'Test Conditions':
      'The default human language of each web page can be programmatically determined.',
    'Disability Impact':
      'Without Vision, With Limited Vision, Without Hearing, With Limited Hearing, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '3.1.2-part-language-defined',
    'Test ID': '11.B ',
    'Test Category': 'Language',
    'WCAG SC': '3.1.2',
    Level: 'A',
    'Test Conditions':
      'The human language for any content segment that differs from the default human language of the page can be programmatically determined.',
    'Disability Impact':
      'Without Vision, With Limited Vision, Without Hearing, With Limited Hearing, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '2.4.2-page-title-defined',
    'Test ID': '12.A',
    'Test Category': 'Page and Frame Titles',
    'WCAG SC': '2.4.2',
    Level: 'A',
    'Test Conditions': 'A title element is defined for the web page.',
    'Disability Impact':
      "Without Vision, With Limited Vision, With Limited Manipulation, With Limited Language, Cognitive and Learning Abilities'",
  },
  {
    'Test Name': '2.4.2-page-title-purpose',
    'Test ID': '12.B',
    'Test Category': 'Page and Frame Titles',
    'WCAG SC': '2.4.2',
    Level: 'A',
    'Test Conditions':
      'The title element identifies the contents or purpose of the web page.',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Manipulation, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '4.1.2-frame-title-name',
    'Test ID': '12.D.custom',
    'Test Category': 'Page and Frame Titles',
    'WCAG SC': '4.1.2',
    'axe-ruless': ['frame-title-unique', 'frame-title'],
    Level: 'A',
    'Test Conditions':
      'Each frame has a title attribute that describes its content. The combination of accessible name and description for each <iframe.> describes its content.',
    Note: 'TT 12.C, TT 12.D',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '1.4.1-color-meaning',
    'Test ID': '13.A',
    'Test Category': 'Sensory and Color',
    'WCAG SC': '1.4.1',
    Level: 'A',
    'Test Conditions':
      'Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.',
    'Disability Impact':
      'Without Vision, With Limited Vision, Without Perception of Color',
  },
  {
    'Test Name': '1.3.3-sensory-info',
    'Test ID': '13.B',
    'Test Category': 'Sensory and Color',
    'WCAG SC': '1.3.3',
    Level: 'A',
    'Test Conditions':
      'Instructions provided for understanding and operating content do not rely solely on sensory characteristics of components, such as shape, size, visual location, orientation, or sound.',
    'Disability Impact':
      'Without Vision, With Limited Vision, Without Perception of Color, Without Hearing, With Limited Hearing',
  },
  {
    'Test Name': '1.4.3-contrast',
    'Test ID': '13.C',
    'Test Category': 'Sensory and Color',
    'WCAG SC': '1.4.3',
    Level: 'AA',
    'Test Conditions':
      'The visual presentation of text and images of text have sufficient contrast.',
    'Disability Impact': "'With Limited Vision, Without Perception of Color",
  },
  {
    'Test Name': '1.3.1-table-identification',
    'Test ID': '14.A',
    'Test Category': 'Tables',
    'WCAG SC': '1.3.1',
    Level: 'A',
    'Test Conditions':
      'Each data table has programmatic markup to identify it as a table.',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '1.3.1-cell-header-association',
    'Test ID': '14.B',
    'Test Category': 'Tables',
    'WCAG SC': '1.3.1',
    Level: 'A',
    'Test Conditions':
      'All data cells are programmatically associated with relevant headers. ',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '1.3.1-layout-table-structure',
    'Test ID': '14.C',
    'Test Category': 'Tables',
    'WCAG SC': '1.3.1 ',
    Level: 'A',
    'Test Conditions':
      "The layout table DOES NOT designate the layout table using ARIA role= 'table'AND DOES NOT include table header structure and relationship elements and/or associated attributes.",
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '1.3.1-meaningful-content-css-before-after',
    'Test ID': '15.A',
    'Test Category': 'CSS',
    'WCAG SC': '1.3.1',
    Level: 'A',
    'Test Conditions':
      'For the meaningful content provided via CSS pseudo-elements ::before and ::after, equivalent information is available in another way.',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '1.3.2-content-order-meaning-css-position',
    'Test ID': '15.B ',
    'Test Category': 'CSS',
    'WCAG SC': '1.3.2',
    Level: 'A',
    'Test Conditions':
      'The reading order of the content (in context) is correct and the meaning of the content (in context) is preserved without CSS positioning.',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '1.2.1-audio-transcript-text',
    'Test ID': '16.A ',
    'Test Category': 'Audio/Video-Only',
    'WCAG SC': '1.2.1',
    Level: 'A',
    'Test Conditions':
      'A text-based alternative is provided for audio-only content that provides an accurate and complete representation of the audio-only content.',
    'Disability Impact':
      "'Without Hearing, With Limited Hearing','With Limited Language, Cognitive and Learning Abilities'",
  },
  {
    'Test Name': '1.2.1-video-alternative-equivalent',
    'Test ID': '16.B ',
    'Test Category': 'Audio/Video-Only',
    'WCAG SC': '1.2.1',
    Level: 'A',
    'Test Conditions':
      'The video-only content information is also available through an equivalent text or audio alternative.',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '1.2.2-captions-equivalent',
    'Test ID': '17.A',
    'Test Category': "Sync'd Media",
    'WCAG SC': '1.2.2',
    Level: 'A',
    'Test Conditions':
      'The multimedia provides accurate captions for the audio content.',
    'Disability Impact':
      "'Without Hearing, With Limited Hearing, With Limited Language, Cognitive and Learning Abilities",
  },
  {
    'Test Name': '1.2.3-audio-alternative',
    'Test ID': '17.1.custom',
    'Test Category': "Sync'd Media",
    'WCAG SC': '1.2.3',
    Level: 'A',
    'Test Conditions':
      'The multimedia provides an alternative version - audio description (equivalent soundtrack) OR text alternative for the video/audio content.',
    'Disability Impact':
      "'Without Hearing, With Limited Hearing, With Limited Language, Cognitive and Learning Abilities",
  },
  {
    'Test Name': '1.2.5-audio-description-equivalent',
    'Test ID': '17.B',
    'Test Category': "Sync'd Media",
    'WCAG SC': '1.2.5',
    Level: 'AA',
    'Test Conditions':
      'The multimedia provides an equivalent soundtrack (combination of narration and audio descriptions) for the video content.',
    'Disability Impact':
      'Without Vision, Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '1.2.4-captions-live-equivalent',
    'Test ID': '17.C',
    'Test Category': "Sync'd Media",
    'WCAG SC': '1.2.4',
    Level: 'AA',
    'Test Conditions':
      'The live multimedia provides accurate captions for the audio content.',
    'Disability Impact':
      "'Without Hearing, With Limited Hearing, With Limited Language, Cognitive and Learning Abilities",
  },
  {
    'Test Name': '503.4-caption-description-controls',
    'Test ID': '17.D',
    'Test Category': "Sync'd Media",
    'WCAG SC': '503.4',
    Level: '',
    'Test Conditions':
      'The media player provides user controls for closed captions and audio descriptions.',
    'Disability Impact':
      'Without Vision, With Limited Vision, Without Hearing, With Limited Hearing, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '503.4.1-caption-control',
    'Test ID': '17.E ',
    'Test Category': "Sync'd Media",
    'WCAG SC': '503.4.1',
    Level: '',
    'Test Conditions':
      'User controls for captions are provided at the same menu as the user controls for volume or program selection.',
    'Disability Impact':
      "'Without Hearing, With Limited Hearing, With Limited Manipulation, With Limited Language, Cognitive and Learning Abilities",
  },
  {
    'Test Name': '503.4.2-description-control',
    'Test ID': '17.F',
    'Test Category': "Sync'd Media",
    'WCAG SC': '503.4.2',
    Level: '',
    'Test Conditions':
      'User controls for audio descriptions are provided at the same menu as the user controls for volume or program selection.',
    'Disability Impact':
      'Without Vision, With Limited Manipulation, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '1.4.4-resize-text',
    'Test ID': '18.A',
    'Test Category': 'Resize Text',
    'WCAG SC': '1.4.4',
    Level: 'AA',
    'Test Conditions':
      'There is a mechanism to resize, scale, or zoom in on the text to at least 200% of its original size without loss of content or functionality.',
    'Disability Impact': "'With Limited Vision",
  },
  {
    'Test Name': '2.4.5-multiple-ways',
    'Test ID': '19.A',
    'Test Category': 'Multiple Ways',
    'WCAG SC': '2.4.5',
    Level: 'AA',
    'Test Conditions':
      'There are two or more ways to locate a web page within a set of web pages.',
    'Disability Impact':
      "Without Vision, With Limited Vision','With Limited Manipulation, With Limited Language, Cognitive and Learning Abilities",
  },
  {
    'Test Name': '4.1.1-parsing',
    'Test ID': '20.A',
    'Test Category': 'Parsing',
    'WCAG SC': '4.1.1',
    Level: 'A',
    'Test Conditions': 'Not tested.',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Manipulation, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': 'Non-interference',
    'Test ID': '1.E',
    'Test Category': 'Non-interference',
    'WCAG SC': 'Requirements',
    Level: 'A',
    'Test Conditions':
      "Content in the non-conforming version(s) meets following SCs: 1.4.2 - Audio Control, 2.1.2 - No Keyboard Trap, 2.3.1 - Three Flashes or Below Threshold, 2.2.2 - Pause, Stop, Hide. It's mean test with IDs 2.!, 2.B, 2.C, 3.A and 4.C should be conducted.",
    url: 'https://www.w3.org/TR/WCAG21/#cc5',
    'Disability Impact':
      'Without Vision, With Limited Vision, Without Perception of Color, Without Hearing, With Limited Hearing, Without Speech, With Limited Manipulation, With Limited Language, Cognitive and Learning Abilities, Photosensitive Epilepsy / Photosensitive Seizure Disorders',
  },
]
