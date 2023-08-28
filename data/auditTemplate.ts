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
    'axe-rules': true, // all by WCAG SC
    Level: 'A',
    'Test Conditions': [
      'The user can pause, stop, or control the volume of audio content that plays automatically. ',
    ],
    Techniques: [
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
    'WCAG SC': ['2.2.2'],
    'axe-rules': true, // all by WCAG SC
    Level: 'A',
    'Test Conditions': [
      'The user can pause, stop, or hide moving, blinking, or scrolling content that 1) start automatically, 2) lasts more than five seconds and 3) is presented in parallel with other content unless the movement, blinking, or scrolling is part of an activity where it is essential',
      'The user can pause, stop, hide, or control the frequency of automatically updating content.',
    ],
    Techniques: [
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
    'WCAG SC': ['4.1.2'],
    'axe-rules': null, // no axe rule appropriate for this issue
    Level: 'A',
    'Test Conditions': [
      'The page provides notification of each automatic update/change in content or other mechanism that inform user about changes.',
    ],
    Techniques: [
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
    'Test Name': '4.1.3-status-messages',
    'Test ID': '413.custom',
    'Test Category': 'Autoplay/update',
    'WCAG SC': ['4.1.3'],
    'axe-rules': true, // all by WCAG SC if exist
    Level: 'AA',
    'Test Conditions': [
      'In content implemented using markup languages, status messages can be programmatically determined through role or properties such that they can be presented to the user by assistive technologies without receiving focus',
    ],
    Techniques: [
      'Use live region to inform user about content changes',
      'Using role=status to present status messages',
      'Using ARIA role=alert or Live Regions to Identify Errors',
      'Providing text descriptions to identify required fields that were not completed',
      'Providing a text description when the user provides information that is not in the list of allowed values',
      'Providing a text description when user input falls outside the required format or values',
      'Providing suggested correction text',
      'Using role=log to identify sequential information updates',
    ],
    Note: '',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '2.3.1-flashing',
    'Test ID': '3.A',
    'Test Category': 'Flashing',
    'WCAG SC': ['2.3.1'],
    'axe-rules': true, // all by WCAG SC if exist
    Level: 'A',
    'Test Conditions': [
      'If NO flashing content is found, then this Test Condition is DOES NOT APPLY (Requirements). If flashing content IS found, then this test should be recorded as NOT TESTED.',
    ],
    Techniques: [
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
    'WCAG SC': ['2.1.1'],
    'axe-rules': true, // all by WCAG SC if exist
    Level: 'A',
    'Test Conditions': [
      'All functionality can be accessed and executed using only the keyboard.',
    ],
    Techniques: [
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
    'WCAG SC': ['2.1.1'],
    'axe-rules': null, // no axe rule appropriate for this issue
    Level: 'A',
    'Test Conditions': [
      'Individual keystrokes do not require specific timings for activation of functionality.',
    ],
    Techniques: [
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
    'WCAG SC': ['2.1.2'],
    'axe-rules': true, // all by WCAG SC if exist
    Level: 'A',
    'Test Conditions': ['There is no keyboard trap.'],
    Techniques: [
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
    'WCAG SC': ['2.4.7'],
    'axe-rules': true, // all by WCAG SC if exist
    Level: 'AA',
    'Test Conditions': [
      'A visible indication of focus is provided when focus is on the interface component.',
    ],
    Techniques: [
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
    'WCAG SC': ['3.2.1'],
    'axe-rules': true, // all by WCAG SC if exist
    Level: 'A',
    'Test Conditions': [
      'When an interface component receives focus, it does not initiate an unexpected change of context.',
    ],
    Techniques: [
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
    'WCAG SC': ['2.4.3'],
    'axe-rules': true, // all by WCAG SC if exist
    Level: 'A',
    'Test Conditions': [
      'The focus order preserves the meaning and operability of the web page.',
      'Focus is moved to revealed content (expanded components, menus, dialogs).',
      'Focus is returned to the logical sequence (expanded components, menus, dialogs).',
    ],
    Techniques: [
      'Placing the interactive elements in an order that follows sequences and relationships within the content',
      'Making the DOM order match the visual order',
      'Creating Custom Dialogs in a Device Independent Way and control focus',
      'Reordering page sections using the Document Object Model',
    ],
    Note: 'Trusted Tester 4.F, 4.G, 4.H',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Manipulation, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '1.4.13-hover-focus-content',
    'Test ID': '1413.custom',
    'Test Category': 'Keyboard/focus',
    'WCAG SC': ['1.4.13'],
    'axe-rules': true, // all by WCAG SC if exist
    Level: 'AA',
    'Test Conditions': [
      'Where receiving and then removing pointer hover or keyboard focus triggers additional content to become visible and then hidden, the content should be dismissable, hoverable and persistent unless the content is controlled by user agent',
      'A mechanism is available to dismiss the additional content without moving pointer hover or keyboard focus, unless the additional content communicates an input error or does not obscure or replace other content',
      'If pointer hover can trigger the additional content, then the pointer can be moved over the additional content without the additional content disappearing',
      'The additional content remains visible until the hover or focus trigger is removed, the user dismisses it, or its information is no longer valid',
    ],
    Techniques: [
      'Making content on focus or hover hoverable, dismissible, and persistent',
      'ARIA: Using role="tooltip"',
      'CSS: Using hover and focus pseudo classes',
    ],
    Note: '',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Manipulation, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '2.1.4-character-key-shortcut',
    'Test ID': '214.custom',
    'Test Category': 'Keyboard/focus',
    'WCAG SC': ['2.1.4'],
    'axe-rules': true, // all by WCAG SC if exist
    Level: 'A',
    'Test Conditions': [
      'If a keyboard shortcut is implemented in content using only letter (including upper-and lower-case letters), punctuation, number, or symbol characters a mechanism to turn shortcut off is implemented OR a mechanism to remap the shortcut is implemented OR the keyboard shortcut for a user interface component is only active when that component has focus',
    ],
    Techniques: [
      'Providing a mechanism to allow users to remap or turn off character key shortcuts',
    ],
    Note: 'For custom keyboard shortcut',
    'Disability Impact':
      'With Limited Manipulation, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '2.5.1-pointer-gestures',
    'Test ID': '251.custom',
    'Test Category': 'Keyboard/focus',
    'WCAG SC': ['2.5.1'],
    'axe-rules': true, // all by WCAG SC if exist
    Level: 'A',
    'Test Conditions': [
      'All functionality that uses multipoint or path-based gestures for operation can be operated with a single pointer without a path-based gesture, unless a multipoint or path-based gesture is essential.',
    ],
    Techniques: [
      'Providing controls to achieve the same result as path based or multipoint gestures',
      'Providing single point activation for a control slider',
    ],
    Note: 'This requirement applies to web content that interprets pointer actions (i.e. this does not apply to actions that are required to operate the user agent or assistive technology).',
    'Disability Impact':
      'With Limited Manipulation, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '2.5.2-pointer-gestures',
    'Test ID': '252.custom',
    'Test Category': 'Keyboard/focus',
    'WCAG SC': ['2.5.2'],
    'axe-rules': true, // all by WCAG SC if exist
    Level: 'A',
    'Test Conditions': [
      'For functionality that can be operated using a single pointer the down-event of the pointer is not used to execute any part of the function OR Completion of the function is on the up-event, and a mechanism is available to abort the function before completion or to undo the function after completion OR The up-event reverses any outcome of the preceding down-event',
    ],
    Techniques: [
      'Ensuring that drag-and-drop actions can be cancelled',
      'Using native controls to ensure functionality is triggered on the up-event',
      'Touch events are only triggered when touch is removed from a control',
    ],
    Note: 'This requirement applies to web content that interprets pointer actions (i.e. this does not apply to actions that are required to operate the user agent or assistive technology).',
    'Disability Impact':
      'With Limited Manipulation, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '1.3.1-programmatic-label',
    'Test ID': '5.C',
    'Test Category': 'Forms',
    'WCAG SC': ['1.3.1', '4.1.2'],
    'axe-rules': [
      'aria-input-field-name',
      'aria-toggle-field-name',
      'label',
      'select-name',
      'aria-required-children',
      'aria-required-parent',
    ],
    Level: 'A',
    'Test Conditions': [
      'The combination of the accessible name, accessible description, and other programmatic associations (e.g., table column and/or row associations) describes each input field and includes all relevant instructions and cues (textual and graphical).',
    ],
    Techniques: [
      'Using label elements to associate text labels with form controls',
      'Using aria-labelledby or aria-label to provide a name for user interface controls',
      'Using grouping roles to identify related form controls',
      'Using the title attribute to identify form controls when the label element cannot',
      'Providing a description for groups of form controls using fieldset and legend elements',
      'Using optgroup to group option elements inside a select',
      'Using the aria-describedby property to provide a descriptive label for user interface controls',
    ],
    Note: '',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '3.3.2-label-provided',
    'Test ID': '5.A',
    'Test Category': 'Forms',
    'WCAG SC': ['3.3.2'],
    'axe-rules': true, // all by WCAG SC if exist
    Level: 'A',
    'Test Conditions': [
      'Labels or instructions are provided for form elements.',
    ],
    Techniques: [
      'Providing descriptive labels AND:',
      'Using the aria-describedby property to provide a descriptive label for user interface',
      'Using aria-labelledby to concatenate a label from several text nodes',
      'Using grouping roles to identify related form controls',
      'Providing expected data format and example',
      'Providing text instructions at the beginning of a form or set of fields that describes the necessary input',
      'Positioning labels to maximize predictability of relationships',
      'Providing text descriptions to identify required fields that were not completed',
      'Indicating required form controls using label or legend',
      'Providing a description for groups of form controls using fieldset and legend elements',
    ],
    Note: '',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '2.4.6-label-descriptive',
    'Test ID': '5.B',
    'Test Category': 'Forms',
    'WCAG SC': ['2.4.6'],
    'axe-rules': true, // all by WCAG SC if exist
    Level: 'AA',
    'Test Conditions': ['Each form label is sufficiently descriptive.'],
    Techniques: ['Providing descriptive labels'],
    Note: '',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Manipulation,With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '3.2.2-on-input',
    'Test ID': '5.D',
    'Test Category': 'Forms',
    'WCAG SC': ['3.2.2'],
    'axe-rules': true, // all by WCAG SC if exist
    Level: 'A',
    'Test Conditions': [
      'Changing field values/selections (e.g., entering data in a text field, changing a radio button section) does NOT initiate and unexpected change of context.',
    ],
    Techniques: [
      'Providing a submit button to initiate a change of context',
      'Describing what will happen before a change to a form control that causes a change of context to occur is made',
      'Using an onchange event on a select element without causing a change of context',
    ],
    Note: '',
    'Disability Impact':
      'Without Vision, Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '4.1.2-change-notify-form',
    'Test ID': '5.E ',
    'Test Category': 'Forms',
    'WCAG SC': ['4.1.2'],
    'axe-rules': null, // no axe rule appropriate for this issue
    Level: 'A',
    'Test Conditions': [
      'The page provides notification of each form-related change in content.',
    ],
    Techniques: [
      'Using the accessibility API features of a technology to expose names and notification',
      'Creating components using a technology that supports the accessibility notification of changes',
    ],
    Note: '',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '3.3.1-error-identification',
    'Test ID': '5.F',
    'Test Category': 'Forms',
    'WCAG SC': ['3.3.1'],
    'axe-rules': true, // all by WCAG SC if exist
    Level: 'A',
    'Test Conditions': [
      'The item in error is identified in text and sufficiently described to the user in text. Not color-only.',
    ],
    Techniques: [
      'Providing text descriptions to identify required fields that were not completed',
      'Providing errors identification using text, not color-only change',
      'Using Aria-Invalid to Indicate An Error Field',
      'Providing client-side validation and alert',
      'Providing a text description when the user provides information that is not in the list of allowed values',
      'Providing a text description when user input falls outside the required format or values',
      'Providing client-side validation and adding error text via the DOM',
      'Advisory: Creating a mechanism that allows users to jump to errors',
      'Advisory: Providing success feedback when data is submitted successfully',
    ],
    Note: '',
    'Disability Impact':
      "Without Vision, With Limited Vision','Without Perception of Color, With Limited Language, Cognitive and Learning Abilities",
  },
  {
    'Test Name': '3.3.3-error-suggestion',
    'Test ID': '5.G',
    'Test Category': 'Forms',
    'WCAG SC': ['3.3.3'],
    'axe-rules': true, // all by WCAG SC if exist
    Level: 'AA',
    'Test Conditions': [
      'Guidance (e.g., suggestion for corrected input) is provided about how to correct errors for form fields.',
    ],
    Techniques: [
      'Providing a text description when user input falls outside the required format or values',
      'Providing suggested correction text',
      'Using aria-alertdialog to Identify Errors',
      'Providing client-side validation and adding error text via the DOM',
      'Providing client-side validation and alert',
      'Advisory: Creating a mechanism that allows users to jump to errors',
      'Advisory: Providing success feedback when data is submitted successfully',
    ],
    Note: '',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Manipulation, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '3.3.4-error-prevention',
    'Test ID': '5.H',
    'Test Category': 'Forms',
    'WCAG SC': ['3.3.4'],
    'axe-rules': true, // all by WCAG SC if exist
    Level: 'AA',
    'Test Conditions': [
      'The web page allows the user to check, reverse, and/or confirm submission.',
    ],
    Techniques: [
      'Providing the ability for the user to review and correct answers before submitting',
      'Providing a checkbox in addition to a submit button',
      'Providing the ability to recover deleted information',
      'Requesting confirmation to continue with selected action',
      'Providing a stated time within which an online request (or transaction) may be amended or canceled by the user after making the request',
    ],
    Note: '',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Manipulation, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '1.3.5-input-purpose',
    'Test ID': '135.custom',
    'Test Category': 'Forms',
    'WCAG SC': ['1.3.5'],
    'axe-rules': true, // all by WCAG SC if exist
    Level: 'AA',
    'Test Conditions': [
      'Input type and autocomplete is programmatically determined and appropriate',
    ],
    Techniques: ['Using HTML 5.2 autocomplete attributes'],
    Note: '',
    'Disability Impact':
      'With Limited Manipulation, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '2.4.4-link-purpose',
    'Test ID': '6.A',
    'Test Category': 'Links/buttons',
    'WCAG SC': ['2.4.4', '4.1.2'],
    'axe-rules': [
      'area-alt',
      'link-name',
      'aria-command-name',
      'aria-tooltip-name',
      'input-button-name',
      'button-name',
      'nested-interactive',
    ],
    Level: 'A',
    'Test Conditions': [
      'The purpose of each link or button can be determined from any combination of the link/button text, accessible name, accessible description, and/or programmatically determined link/button context.',
    ],
    Techniques: [
      'Providing link text that describes the purpose of a link',
      'Using aria-label or aria-labelledby for link purpose',
      'Providing text alternatives for the area elements of image maps',
      'Identifying the purpose of a link using link text combined with the text of the enclosing sentence',
      'Supplementing link text with the title attribute or additional description',
      'Using CSS to hide a portion of the link text',
    ],
    Note: '',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Manipulation, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '4.1.2-change-notify-links',
    'Test ID': '6.B',
    'Test Category': 'Links/buttons',
    'WCAG SC': ['4.1.2'],
    'axe-rules': null, // no axe rule appropriate for this issue
    Level: 'A',
    'Test Conditions': [
      'The page provides notification of each change in content that is the result of interaction with a link or button.',
    ],
    Techniques: [
      'Using the accessibility API features of a technology to expose names and notification',
      'Creating components using a technology that supports the accessibility notification of changes',
    ],
    Note: '',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '2.5.3-label-in-name',
    'Test ID': '253.custom',
    'Test Category': 'Links/buttons',
    'WCAG SC': ['2.5.3'],
    'axe-rules': true, // all by WCAG SC if exist
    Level: 'A',
    'Test Conditions': [
      'For user interface components with labels that include text or images of text, the name contains the text that is presented visually',
      'Accessible name matches visible label',
      'Accessible name starts with visible label',
    ],
    Techniques: [
      'Including the text of the visible label as part of the accessible name',
      'Matching the accessible name to the visible label',
    ],
    Note: '',
    'Disability Impact':
      'With Limited Language, Cognitive and Learning Abilities, Speech Users',
  },
  {
    'Test Name': '1.1.1-image-name',
    'Test ID': '7.A.custom',
    'Test Category': 'Images',
    'WCAG SC': ['1.1.1'],
    'axe-rules': true, // all by WCAG SC if exist
    Level: 'A',
    'Test Conditions': [
      'The accessible name and accessible description for a meaningful image provides an equivalent description of the image.',
      'There is no accessible name and accessible description for a decorative image.',
      'The background image is not the only means used to convey important information.',
    ],
    Techniques: [
      'Providing short text alternative for non-text content that serves the same purpose and presents the same information as the non-text content',
      'Using alt attributes on img elements',
      'Using the body of the object element',
      'Providing text alternatives for emojis, emoticons, ASCII art, and leetspeak',
      'Using aria-label to provide labels for objects',
      'Using aria-labelledby to provide a text alternative for non-text content',
      'Using a text alternative on one item within a group of images that describes all items in the group',
      'Using aria-describedby to provide descriptions of images',
      'Providing a long description in another location with a link to it that is immediately adjacent to the non-text content',
      'Providing a long description in text near the non-text content, with a reference to the location of the long description in the short description',
      'Providing long description for non-text content that serves the same purpose and presents the same information',
      'Using null alt text and no title attribute on img elements for images that assistive technology should ignore',
      'Using CSS to include decorative images',
      'Hiding decorative images with aria-hidden',
    ],
    Note: 'Truster Tester 7.A, 7.B, 7.C',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '1.1.1-captcha-alternative',
    'Test ID': '7. D',
    'Test Category': 'Images',
    'WCAG SC': ['1.1.1'],
    'axe-rules': null, // no axe rule appropriate for this issue
    Level: 'A',
    'Test Conditions': 'Alternative forms of CAPTCHA are provided.',
    Techniques: [
      'Providing a text alternative that describes the purpose of the CAPTCHA AND Ensuring that the Web Page contains another CAPTCHA serving the same purpose using a different modality',
    ],
    Note: '',
    'Disability Impact':
      'Without Vision, With Limited Vision, Without Hearing, With Limited Hearing, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '1.4.5-image-of-text',
    'Test ID': '7.E',
    'Test Category': 'Images',
    'WCAG SC': ['1.4.5'],
    'axe-rules': true, // all by WCAG SC if exist
    Level: 'AA',
    'Test Conditions': [
      'The image of text cannot be replaced by text or is customizable.',
    ],
    Techniques: [
      'Using CSS to control visual presentation of text',
      'Using CSS to replace text with images of text and providing user interface controls to switch',
      'Separating information and structure from presentation to enable different presentations',
    ],
    Note: '',
    'Disability Impact':
      'Without Vision, With Limited Vision, Without Perception of Color, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '2.2.1-timing-adjustable',
    'Test ID': '8.A ',
    'Test Category': 'Adjustable time limits',
    'WCAG SC': ['2.2.1'],
    'axe-rules': true, // all by WCAG SC if exist
    Level: 'A',
    'Test Conditions': [
      'The user can turn off, adjust, or extend the time limit.',
      'Real-time Exceptions: The time limit is a required part of a real-time event (for example, an auction), and no alternative to the time limit is possible',
      'Essential Exception: The time limit is essential and extending it would invalidate the activity',
      'Hour Exception: The time limit is longer than 20 hours',
    ],
    Techniques: [
      'Providing a checkbox on the first page of a multipart form that allows users to ask for longer session time limit or no session time limit',
      'Providing a way for the user to turn the time limit off',
      'Providing the user with a means to set the time limit to 10 times the default time limit',
      'Providing a script that warns the user a time limit is about to expire AND Allowing the user to extend the default time limit',
      'Using script to scroll content, and providing a mechanism to pause it',
      'Providing a mechanism to allow users to display moving, scrolling, or auto-updating text in a static window or area',
    ],
    Note: '',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Manipulation, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '2.4.1-bypass-function',
    'Test ID': '9.A',
    'Test Category': 'Repetitive Content',
    'WCAG SC': ['2.4.1'],
    'axe-rules': true, // all by WCAG SC if exist
    Level: 'A',
    'Test Conditions': [
      'A keyboard-accessible method is provided to bypass repetitive content.',
    ],
    Techniques: [
      'Adding a link at the top of each page that goes directly to the main content area',
      'Adding a link at the beginning of a block of repeated content to go to the end of the block',
      'Adding links at the top of the page to each area of the content',
      'Using ARIA or HTML landmarks to identify regions of a page',
      'Providing heading elements at the beginning of each section of content',
      'Using an expandable and collapsible menu to bypass block of content',
      'Advisory: Positioning content based on structural markup',
      'Advisory: Grouping related links using the nav element',
    ],
    Note: '',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Manipulation, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '3.2.3-consistent-navigation',
    'Test ID': '9.B',
    'Test Category': 'Repetitive Content',
    'WCAG SC': ['3.2.3'],
    'axe-rules': true, // all by WCAG SC if exist
    Level: 'AA',
    'Test Conditions': [
      'Each navigational element occurs in the same relative order with regard to other repeated components on each web page where it appears.',
    ],
    Techniques: [
      'Presenting repeated components in the same relative order each time they appear',
      'Advisory: Grouping related links using the nav element',
    ],
    Note: '',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '3.2.4-consistent-identification',
    'Test ID': '9.C',
    'Test Category': 'Repetitive Content',
    'WCAG SC': ['3.2.4'],
    'axe-rules': true, // all by WCAG SC if exists
    Level: 'AA',
    'Test Conditions': [
      'The accessible name and description is consistent for components that perform the same function.',
    ],
    Techniques: [
      'Using labels, names, and text alternatives consistently for content that has the same functionality',
      'Ensuring consistent identification of functional components that appear repeatedly within a set of Web pages',
    ],
    Note: '',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '2.4.6-heading-purpose',
    'Test ID': '10.A',
    'Test Category': 'Content Structure',
    'WCAG SC': ['2.4.6'],
    'axe-rules': ['empty-heading'], // + 2.4.6 if exists
    Level: 'AA',
    'Test Conditions': [
      'Each heading describes the topic or purpose of its content.',
    ],
    Techniques: ['Providing descriptive headings'],
    Note: '',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '1.3.1-heading-determinable',
    'Test ID': '10.B ',
    'Test Category': 'Content Structure',
    'WCAG SC': ['1.3.1'],
    'axe-rules': null, // no axe rule appropriate for this issue
    Level: 'A',
    'Test Conditions':
      'Each programmatically determinable heading is a visual heading and each visual heading is programmatically determinable.',
    Techniques: [
      'Using h1-h6 to identify headings',
      'Using role=heading to identify headings',
      'Using standard text formatting conventions for headings',
      'Using CSS to control visual presentation of text',
    ],
    Note: '',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '1.3.1-heading-level',
    'Test ID': '10.C',
    'Test Category': 'Content Structure',
    'WCAG SC': ['1.3.1'],
    'axe-rules': ['heading-order', 'page-has-heading-one'],
    Level: 'A',
    'Test Conditions': [
      'Programmatic heading levels logically match the visual heading presentation within the heading structure.',
    ],
    Techniques: [
      'Using h1-h6 to identify headings',
      'Using role=heading to identify headings',
      'Using semantic HTML elements to identify regions of a page',
      'Organizing a page using headings',
    ],
    Note: '',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '1.3.1-list-type',
    'Test ID': '10.D',
    'Test Category': 'Content Structure',
    'WCAG SC': ['1.3.1'],
    'axe-rules': [
      'aria-required-children',
      'aria-required-parent',
      'definition-list',
      'dlitem',
      'list',
      'listitem',
    ],
    Level: 'A',
    'Test Conditions': [
      'All visually apparent lists are programmatically identified according to their type.',
    ],
    Techniques: [
      'Using ol, ul and dl for lists or groups of links',
      'Using standard text formatting conventions for lists',
    ],
    Note: '',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '3.1.1-page-language-defined',
    'Test ID': '11.A',
    'Test Category': 'Language',
    'WCAG SC': ['3.1.1'],
    'axe-rules': true, // all by WCAG SC if exists
    Level: 'A',
    'Test Conditions': [
      'The default human language of each web page can be programmatically determined.',
    ],
    Techniques: ['Using the language attribute on the HTML element'],
    Note: '',
    'Disability Impact':
      'Without Vision, With Limited Vision, Without Hearing, With Limited Hearing, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '3.1.2-part-language-defined',
    'Test ID': '11.B ',
    'Test Category': 'Language',
    'WCAG SC': ['3.1.2'],
    'axe-rules': true, // all by WCAG SC if exists
    Level: 'A',
    'Test Conditions': [
      'The human language for any content segment that differs from the default human language of the page can be programmatically determined.',
    ],
    Techniques: [
      'Using language attributes to identify changes in the human language',
    ],
    Note: '',
    'Disability Impact':
      'Without Vision, With Limited Vision, Without Hearing, With Limited Hearing, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '2.4.2-page-title-defined',
    'Test ID': '12.A.custom',
    'Test Category': 'Page and Frame Titles',
    'WCAG SC': ['2.4.2'],
    'axe-rules': true, // all by WCAG SC if exists + one-level-heading ??
    Level: 'A',
    'Test Conditions': [
      'A title element is defined for the web page.',
      'The title element identifies the contents or purpose of the web page.',
    ],
    Techniques: ['Providing a title using the title element'],
    Note: 'TT 12.A , 12.B',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Manipulation, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '4.1.2-frame-title-name',
    'Test ID': '12.D.custom',
    'Test Category': 'Page and Frame Titles',
    'WCAG SC': ['4.1.2'],
    'axe-rules': ['frame-title-unique', 'frame-title'],
    Level: 'A',
    'Test Conditions': [
      'Each frame has a title attribute that describes its content. The combination of accessible name and description for each <iframe.> describes its content.',
    ],
    Techniques: ['Using the title attribute of the iframe element'],
    Note: 'TT 12.C, TT 12.D',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '1.4.1-color-meaning',
    'Test ID': '13.A',
    'Test Category': 'Sensory and Color',
    'WCAG SC': ['1.4.1'],
    'axe-rules': true, // all by WCAG SC if exists
    Level: 'A',
    'Test Conditions': [
      'Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.',
    ],
    Techniques: [
      'Ensuring that information conveyed by color differences is also available in text',
      'Including a text cue for colored form control labels',
      'Ensuring that additional visual cues are available when text color differences are used to convey information',
      'Using a contrast ratio of 3:1 with surrounding text and providing additional visual cues on hover for links or controls where color alone is used to identify them',
      'Advisory: Using CSS to change the presentation of a user interface component when it receives focus',
    ],
    Note: '',
    'Disability Impact':
      'Without Vision, With Limited Vision, Without Perception of Color',
  },
  {
    'Test Name': '1.3.3-sensory-info',
    'Test ID': '13.B',
    'Test Category': 'Sensory and Color',
    'WCAG SC': ['1.3.3'],
    'axe-rules': true, // all by WCAG SC if exists
    Level: 'A',
    'Test Conditions': [
      'Instructions provided for understanding and operating content do not rely solely on sensory characteristics of components, such as shape, size, visual location, orientation, or sound.',
    ],
    Techniques: [
      'Providing textual identification of items that otherwise rely only on sensory information to be understood',
    ],
    'Disability Impact':
      'Without Vision, With Limited Vision, Without Perception of Color, Without Hearing, With Limited Hearing',
  },
  {
    'Test Name': '1.4.3-contrast',
    'Test ID': '13.C',
    'Test Category': 'Sensory and Color',
    'WCAG SC': ['1.4.3'],
    'axe-rules': true, // all by WCAG SC if exists
    Level: 'AA',
    'Test Conditions': [
      'The visual presentation of text and images of text have sufficient contrast.',
    ],
    Techniques: [
      'text is less than 18 point if not bold and less than 14 point if bold: Ensuring that a contrast ratio of at least 4.5:1 exists between text (and images of text) and background behind the text',
      'text is at least 18 point if not bold and at least 14 point if bold: Ensuring that a contrast ratio of at least 3:1 exists between text (and images of  text) and background behind the text',
      'Providing a control with a sufficient contrast ratio that allows users to switch to a presentation that uses sufficient contrast',
      'Advisory: Using a technology that has commonly-available user agents that can change the foreground and background of blocks of text',
    ],
    Note: '',
    'Disability Impact': 'With Limited Vision, Without Perception of Color',
  },
  {
    'Test Name': '1.4.11-non-text-contrast',
    'Test ID': '1411.custom',
    'Test Category': 'Sensory and Color',
    'WCAG SC': ['1.4.11'],
    'axe-rules': true, // all by WCAG SC if exists
    Level: 'AA',
    'Test Conditions': [
      'Important visual information meets the same minimum contrast required for larger text',
      'Ensure meaningful visual cues achieve 3:1 against the background',
    ],
    Techniques: [
      'Using an author-supplied, visible focus indicator',
      'Providing a control with a sufficient contrast ratio that allows users to switch to a presentation that uses sufficient contrast',
      'Ensuring that a contrast ratio of 3:1 is provided for graphical elements',
      'Provide sufficient contrast at the boundaries between adjoining colors',
    ],
    Note: '',
    'Disability Impact': 'With Limited Vision, Without Perception of Color',
  },
  {
    'Test Name': '1.3.1-table-identification',
    'Test ID': '14.A',
    'Test Category': 'Tables',
    'WCAG SC': ['1.3.1'],
    'axe-rules': [
      'aria-required-children',
      'aria-required-parent',
      'table-duplicate-name',
      'scope-attr-valid',
    ],
    Level: 'A',
    'Test Conditions': [
      'Each data table has programmatic markup to identify it as a table.',
    ],
    Techniques: [
      'Using table markup to present tabular information',
      'Using caption elements to associate data table captions with data tables',
      'Using the scope attribute to associate header cells and data cells in data tables',
    ],
    Note: '',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '1.3.1-cell-header-association',
    'Test ID': '14.B',
    'Test Category': 'Tables',
    'WCAG SC': ['1.3.1'],
    'axe-rules': ['td-headers-attr', 'th-has-data-cells'],
    Level: 'A',
    'Test Conditions': [
      'All data cells are programmatically associated with relevant headers. ',
    ],
    Techniques: [
      'Using id and headers attributes to associate data cells with header cells in data tables',
    ],
    Note: '',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '1.3.1-layout-table-structure',
    'Test ID': '14.C',
    'Test Category': 'Tables',
    'WCAG SC': ['1.3.1'],
    'axe-rules': null, // no axe rule appropriate for this issue
    Level: 'A',
    'Test Conditions': [
      'The layout table DOES NOT designate the layout table using ARIA role=table AND DOES NOT include table header structure and relationship elements and/or associated attributes.',
    ],
    Techniques: ['It is not recommended to use table for layout structure'],
    Note: '',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '1.3.1-meaningful-content-css-before-after',
    'Test ID': '15.A',
    'Test Category': 'CSS',
    'WCAG SC': ['1.3.1'],
    'axe-rules': null, // no axe rule appropriate for this issue
    Level: 'A',
    'Test Conditions': [
      'For the meaningful content provided via CSS pseudo-elements ::before and ::after, equivalent information is available in another way.',
    ],
    Techniques: [
      'Providing meaningful content via CSS pseudo-elements ::before and ::after has alternative representation',
    ],
    Note: '',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '1.3.2-content-order-meaning-css-position',
    'Test ID': '15.B',
    'Test Category': 'CSS',
    'WCAG SC': ['1.3.2'],
    'axe-rules': true, // all by WCAG SC if exists
    Level: 'A',
    'Test Conditions': [
      'The reading order of the content (in context) is correct and the meaning of the content (in context) is preserved without CSS positioning.',
    ],
    Techniques: [
      'Ordering the content in a meaningful sequence',
      'Positioning content based on structural markup',
      'Making the DOM order match the visual order',
    ],
    Note: '',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '1.2.1-audio-transcript-text',
    'Test ID': '16.A',
    'Test Category': 'Audio/Video-Only',
    'WCAG SC': ['1.2.1'],
    'axe-rules': true, // all by WCAG SC if exists
    Level: 'A',
    'Test Conditions': [
      'A text-based alternative is provided for audio-only content that provides an accurate and complete representation of the audio-only content.',
    ],
    Techniques: [
      'Providing an alternative for time-based media for audio-only content',
    ],
    Note: '',
    'Disability Impact':
      'Without Hearing, With Limited Hearing, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '1.2.1-video-alternative-equivalent',
    'Test ID': '16.B',
    'Test Category': 'Audio/Video-Only',
    'WCAG SC': ['1.2.1'],
    'axe-rules': true, // all by WCAG SC if exists
    Level: 'A',
    'Test Conditions': [
      'The video-only content information is also available through an equivalent text or audio alternative.',
    ],
    Techniques: [
      'Providing an alternative for time-based media for video-only content',
      'Providing audio that describes the important video content and describing it as such',
      'Advisory: Using the track element to provide audio descriptions',
    ],
    Note: '',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '1.2.2-captions-equivalent',
    'Test ID': '17.A',
    'Test Category': "Sync'd Media",
    'WCAG SC': ['1.2.2'],
    'axe-rules': true, // all by WCAG SC if exists
    Level: 'A',
    'Test Conditions': [
      'The multimedia provides accurate captions for the audio content.',
    ],
    Techniques: [
      'Providing open (always visible) captions',
      'Providing closed captions using any readily available media format that has a video player that supports closed captioning',
      'Using the track element to provide captions',
    ],
    Note: '',
    'Disability Impact':
      'Without Hearing, With Limited Hearing, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '1.2.3-audio-alternative',
    'Test ID': '17.1.custom',
    'Test Category': "Sync'd Media",
    'WCAG SC': ['1.2.3'],
    'axe-rules': true, // all by WCAG SC if exists
    Level: 'A',
    'Test Conditions': [
      'The multimedia provides an alternative version - audio description (equivalent soundtrack) OR text alternative for the video/audio content.',
    ],
    Techniques: [
      'Using a static text alternative to describe a talking head video',
      'Providing an alternative for time based media - full text alternative is sufficient',
      'Placing a link to the alternative for time-based media immediately next to the non-text content',
      'Providing a version of a movie with audio descriptions',
      'Providing a movie with extended audio descriptions',
      'Providing a second, user-selectable, audio track that includes audio descriptions',
    ],
    Note: '',
    'Disability Impact':
      'Without Hearing, With Limited Hearing, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '1.2.5-audio-description-equivalent',
    'Test ID': '17.B',
    'Test Category': "Sync'd Media",
    'WCAG SC': ['1.2.5'],
    'axe-rules': true, // all by WCAG SC if exists
    Level: 'AA',
    'Test Conditions': [
      'The multimedia provides an equivalent soundtrack (combination of narration and audio descriptions) for the video content.',
    ],
    Techniques: [
      'Providing a second, user-selectable, audio track that includes audio descriptions',
      'Providing a version of a movie with audio descriptions',
      'Providing a movie with extended audio descriptions',
      'Only full text alternative is not sufficient, audio description is required',
      'Using a static text alternative to describe a talking head video - only when audio description is not necessary',
    ],
    Note: '',
    'Disability Impact':
      'Without Vision, Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '1.2.4-captions-live-equivalent',
    'Test ID': '17.C',
    'Test Category': "Sync'd Media",
    'WCAG SC': ['1.2.4'],
    'axe-rules': true, // all by WCAG SC if exists
    Level: 'AA',
    'Test Conditions': [
      'The live multimedia provides accurate captions for the audio content.',
    ],
    Techniques: [
      'Creating captions for live synchronized media',
      'Providing open (always visible) captions',
      'Providing closed captions',
    ],
    Note: '',
    'Disability Impact':
      'Without Hearing, With Limited Hearing, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '503.4-caption-control',
    'Test ID': '17.D',
    'Test Category': "Sync'd Media",
    'WCAG SC': false,
    'axe-rules': null, // no axe rule appropriate for this issue
    Level: 'AA',
    'Test Conditions': [
      'The media player provides user controls for closed captions and audio descriptions.',
      'User controls for captions are provided at the same menu as the user controls for volume or program selection.',
      'User controls for audio descriptions are provided at the same menu as the user controls for volume or program selection.',
    ],
    Techniques: [
      'Providing keyboard accessible user controls for audio description and captions',
    ],
    Note: 'Section 508 503.4, Trusted Tester 17.D, 17.E and 17.F',
    'Disability Impact':
      'Without Vision, With Limited Vision, Without Hearing, With Limited Hearing, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '1.4.4-resize-text',
    'Test ID': '18.A',
    'Test Category': 'Presentation and resize',
    'WCAG SC': ['1.4.4'],
    'axe-rules': true, // all by WCAG SC if exists
    Level: 'AA',
    'Test Conditions': [
      'There is a mechanism to resize, scale, or zoom in on the text to at least 200% of its original size without loss of content or functionality.',
    ],
    Techniques: [
      'Using a technology that has commonly-available user agents that support zoom',
      'Specifying the size of text containers using em units',
      'Calculating size and position in a way that scales with text size',
      'Using liquid layout',
      'Providing controls on the Web page that allow users to incrementally change the size of all text on the page up to 200 percent',
      'Ensuring that there is no loss of content or functionality when the text resizes and text containers do not change their width',
    ],
    Note: '',
    'Disability Impact': 'With Limited Vision',
  },
  {
    'Test Name': '1.3.4-orientation',
    'Test ID': '134.custom',
    'Test Category': 'Presentation and resize',
    'WCAG SC': ['1.3.4'],
    'axe-rules': true, // all by WCAG SC if exists
    Level: 'AA',
    'Test Conditions': [
      'Content does not restrict its view and operation to a single display orientation (portrait or landscape)',
    ],
    Techniques: [
      'Using a control to allow access to content in different orientations which is otherwise restricted',
    ],
    Note: '',
    'Disability Impact':
      'With Limited Vision, Cognitive and Learning Abilities, With Limited Manipulation',
  },
  {
    'Test Name': '1.4.10-reflow',
    'Test ID': '1410.custom',
    'Test Category': 'Presentation and resize',
    'WCAG SC': ['1.4.10'],
    'axe-rules': true, // all by WCAG SC if exists
    Level: 'AA',
    'Test Conditions': [
      'Content can be enlarged without requiring horizontal scrolling unless horizontal scrolling is essential for understanding (graphs, video, games, presentations, data tables etc)',
    ],
    Techniques: [
      'Using media queries and grid CSS to reflow columns',
      'Using CSS Flexbox to reflow content',
      'Allowing for Reflow with Long URLs and Strings of Text',
      'Using CSS width, max-width and flexbox to fit labels and inputs',
      'Calculating size and position in a way that scales with text size',
      'Providing options within the content to switch to a layout that does not require the user to scroll horizontally to read a line of text',
      'Advisory: Using media queries to un-fixing sticky headers / footers',
      'Advisory: Using CSS max-width and height to fit images',
      'Advisory: CSS, Reflowing simple data tables (Potential future technique)',
      'Advisory: CSS, Fitting data cells within the width of the viewport (Potential future technique)',
      'Advisory: Mechanism to allow mobile view at any time (Potential future technique)',
    ],
    Note: '',
    'Disability Impact':
      'With Limited Vision, Cognitive and Learning Abilities, With Limited Manipulation',
  },
  {
    'Test Name': '1.4.12-text-spacing',
    'Test ID': '1412.custom',
    'Test Category': 'Presentation and resize',
    'WCAG SC': ['1.4.12'],
    'axe-rules': true, // all by WCAG SC if exists
    Level: 'AA',
    'Test Conditions': [
      'Line height (line spacing) to at least 1.5 times the font size',
      'Spacing following paragraphs to at least 2 times the font size',
      'Letter spacing (tracking) to at least 0.12 times the font size',
      'Word spacing to at least 0.16 times the font size',
      'Users can adjust text spacing to make it easier to read',
      'Ensure content adapts to user-defined text settings',
    ],
    Techniques: [
      'Allowing for text spacing override',
      'Allowing for text spacing without wrapping',
      'Advisory: Using CSS letter-spacing to control spacing within a word',
      'Advisory: Specifying line spacing in CSS',
      'Advisory: Specifying the size of text containers using em units',
    ],
    Note: '',
    'Disability Impact':
      'With Limited Vision, Cognitive and Learning Abilities, With Limited Manipulation',
  },
  {
    'Test Name': '2.5.4-motion-actuation',
    'Test ID': '254.custom',
    'Test Category': 'Presentation and resize',
    'WCAG SC': ['2.5.4'],
    'axe-rules': true, // all by WCAG SC if exists
    Level: 'A',
    'Test Conditions': [
      "Content is not dependent on a user's ability to move a device",
      'The motion is used to operate functionality through an accessibility supported interface',
    ],
    Techniques: [
      'Provide conventional controls and an application setting for motion activated input',
      'Supporting system level features which allow the user to disable motion actuation',
    ],
    Note: '',
    'Disability Impact':
      'With Limited Vision, Cognitive and Learning Abilities, With Limited Manipulation',
  },
  {
    'Test Name': '2.4.5-multiple-ways',
    'Test ID': '19.A',
    'Test Category': 'Multiple Ways',
    'WCAG SC': ['2.4.5'],
    'axe-rules': true, // all by WCAG SC if exists
    Level: 'AA',
    'Test Conditions': [
      'There are two or more ways to locate a web page within a set of web pages - search, sitemap, menu.',
    ],
    Techniques: [
      'Providing links to navigate to related Web pages',
      'Providing a Table of Contents',
      'Providing a site map',
      'Providing a search function to help users find content',
      'Providing a list of links to all other Web pages',
      'Linking to all of the pages on the site from the home page',
      'Advisory: Using the link element and navigation tools',
    ],
    Note: '',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Manipulation, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '4.1.1-parsing',
    'Test ID': '20.A',
    'Test Category': 'Parsing',
    'WCAG SC': ['4.1.1'],
    'axe-rules': true, // all by WCAG SC if exists + aria & semantic?
    Level: 'A',
    'Test Conditions': [
      'HTML is valid',
      'No functional errors that block user to perform actions',
      'All ids are unique',
    ],
    Techniques: [
      'Validating Web pages',
      'Fully conforming to specifications',
      'Using HTML according to spec',
    ],
    Note: 'Testing method is not clear, this is connected with general functioning of page or app, code validation and ocurred errors',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Manipulation, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': 'Non-interference',
    'Test ID': '1.E',
    'Test Category': 'Non-interference',
    'WCAG SC': ['Requirements'],
    Level: 'A',
    'Test Conditions': [
      "Content in the non-conforming version(s) meets following SCs: 1.4.2 - Audio Control, 2.1.2 - No Keyboard Trap, 2.3.1 - Three Flashes or Below Threshold, 2.2.2 - Pause, Stop, Hide. It's mean test with IDs 2.!, 2.B, 2.C, 3.A and 4.C should be conducted.",
    ],
    url: 'https://www.w3.org/TR/WCAG21/#cc5',
    'Disability Impact':
      'Without Vision, With Limited Vision, Without Perception of Color, Without Hearing, With Limited Hearing, Without Speech, With Limited Manipulation, With Limited Language, Cognitive and Learning Abilities, Photosensitive Epilepsy / Photosensitive Seizure Disorders',
  },
]
