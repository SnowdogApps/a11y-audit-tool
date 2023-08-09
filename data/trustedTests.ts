export const trustedTests = [
  {
    CrtID: 'Requirements',
    'Test Name': ' Alt-version-conformant ',
    'Test ID': ' 1.A',
    'Test Category': 'Alternate version ',
    'WCAG SC': 'Requirements',
    Level: '',
    'Test Condition':
      'An alternate version passes all applicable Test Conditions in this test process.',
    'Disability Impact':
      'Without Vision, With Limited Vision, Without Perception of Color, Without Hearing, With Limited Hearing, Without Speech, With Limited Manipulation, With Limited Language, Cognitive and Learning Abilities, Photosensitive Epilepsy / Photosensitive Seizure Disorders',
  },
  {
    CrtID: 'Requirements',
    'Test Name': 'Alt-version-equivalent ',
    'Test ID': ' 1.B',
    'Test Category': 'Alternate version',
    'WCAG SC': 'Requirements',
    Level: '',
    'Test Condition':
      'The accessible version is up to date with the same information and functionality.',
    'Disability Impact':
      'Without Vision, With Limited Vision, Without Perception of Color, Without Hearing, With Limited Hearing, Without Speech, With Limited Manipulation, With Limited Language, Cognitive and Learning Abilities, Photosensitive Epilepsy / Photosensitive Seizure Disorders',
  },
  {
    CrtID: 'Requirements',
    'Test Name': 'Alt-version-access',
    'Test ID': '1.C',
    'Test Category': 'Alternate version',
    'WCAG SC': 'Requirements',
    Level: '',
    'Test Condition':
      'The mechanism to reach the accessible equivalent version from the non-conforming page is accessible.',
    'Disability Impact':
      'Without Vision, With Limited Vision, Without Perception of Color, Without Hearing, With Limited Hearing, Without Speech, With Limited Manipulation, With Limited Language, Cognitive and Learning Abilities, Photosensitive Epilepsy / Photosensitive Seizure Disorders',
  },
  {
    CrtID: 'Requirements',
    'Test Name': 'Alt-version-nc-access',
    'Test ID': '1.D',
    'Test Category': 'Alternate version',
    'WCAG SC': 'Requirements',
    Level: '',
    'Test Condition':
      'The non-conforming version(s) can only be reached from conforming content.',
    'Disability Impact':
      'Without Vision, With Limited Vision, Without Perception of Color, Without Hearing, With Limited Hearing, Without Speech, With Limited Manipulation, With Limited Language, Cognitive and Learning Abilities, Photosensitive Epilepsy / Photosensitive Seizure Disorders',
  },
  {
    CrtID: 'Requirements',
    'Test Name': 'Non-interference',
    'Test ID': '1.E',
    'Test Category': 'Non-interference',
    'WCAG SC': 'Requirements',
    Level: '',
    'Test Condition':
      'Content in the non-conforming version(s) meets Conformance Requirement 5.',
    'Disability Impact':
      'Without Vision, With Limited Vision, Without Perception of Color, Without Hearing, With Limited Hearing, Without Speech, With Limited Manipulation, With Limited Language, Cognitive and Learning Abilities, Photosensitive Epilepsy / Photosensitive Seizure Disorders',
  },
  {
    CrtID: '1.4.2',
    'Test Name': '1.4.2-Audio-control',
    'Test ID': '2.A',
    'Test Category': '2 Autoplay/update',
    'WCAG SC': '1.4.2',
    Level: 'A',
    'Test Condition':
      'The user can pause, stop, or control the volume of audio content that plays automatically.',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Hearing, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    CrtID: '2.2.2',
    'Test Name': '2.2.2-Blinking-moving-scrolling',
    'Test ID': '2.B',
    'Test Category': '2 Autoplay/update',
    'WCAG SC': '2.2.2',
    Level: 'A',
    'Test Condition':
      'The user can pause, stop, or hide moving, blinking, or scrolling content.',
    'Disability Impact':
      "'Photosensitive Epilepsy / Photosensitive Seizure Disorders, With Limited Vision, With Limited Language, Cognitive and Learning Abilities",
  },
  {
    CrtID: '2.2.2',
    'Test Name': '2.2.2-Auto-updating',
    'Test ID': '2.C',
    'Test Category': '2 Autoplay/update',
    'WCAG SC': '2.2.2',
    Level: 'A',
    'Test Condition':
      'The user can pause, stop, hide, or control the frequency of automatically updating content.',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    CrtID: '4.1.2',
    'Test Name': '4.1.2-change-notify-auto',
    'Test ID': '2.D',
    'Test Category': '2 Autoplay/update',
    'WCAG SC': '4.1.2',
    Level: 'A',
    'Test Condition':
      'The page provides notification of each automatic update/change in content.',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    CrtID: '2.3.1',
    'Test Name': '2.3.1-flashing',
    'Test ID': '3.A',
    'Test Category': '3 Flashing',
    'WCAG SC': '2.3.1',
    Level: 'A',
    'Test Condition':
      'If NO flashing content is found, then this Test Condition is DOES NOT APPLY (Requirements). If flashing content IS found, then this test should be recorded as NOT TESTED.',
    'Disability Impact':
      "'Photosensitive Epilepsy / Photosensitive Seizure Disorders",
  },
  {
    CrtID: '2.1.1',
    'Test Name': '2.1.1-keyboard-access',
    'Test ID': '4.A',
    'Test Category': '4 Keyboard/focus',
    'WCAG SC': '2.1.1',
    Level: 'A',
    'Test Condition':
      'All functionality can be accessed and executed using only the keyboard.',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Manipulation',
  },
  {
    CrtID: '2.1.1',
    'Test Name': '2.1.1-no-keystroke-timing',
    'Test ID': '4.B',
    'Test Category': '4 Keyboard/focus',
    'WCAG SC': '2.1.1',
    Level: 'A',
    'Test Condition':
      'Individual keystrokes do not require specific timings for activation of functionality.',
    'Disability Impact':
      'Without Vision, With Limited Language, Cognitive and Learning Abilities, With Limited Vision, With Limited Manipulation',
  },
  {
    CrtID: '2.1.2',
    'Test Name': '2.1.2-no-keyboard-trap',
    'Test ID': '4.C',
    'Test Category': '4 Keyboard/focus',
    'WCAG SC': '2.1.2',
    Level: 'A',
    'Test Condition': 'There is no keyboard trap.',
    'Disability Impact':
      "Without Visionn,'With Limited Vision','With Limited Manipulation",
  },
  {
    CrtID: '2.4.7',
    'Test Name': '2.4.7-focus-visible',
    'Test ID': '4.D',
    'Test Category': '4 Keyboard/focus',
    'WCAG SC': '2.4.7',
    Level: 'AA',
    'Test Condition':
      'A visible indication of focus is provided when focus is on the interface component.',
    'Disability Impact':
      "'With Limited Vision','With Limited Manipulation','With Limited Language, Cognitive and Learning Abilities",
  },
  {
    CrtID: '3.2.1',
    'Test Name': '3.2.1-on-focus',
    'Test ID': '4.E',
    'Test Category': '4 Keyboard/focus',
    'WCAG SC': '3.2.1',
    Level: 'A',
    'Test Condition':
      'When an interface component receives focus, it does not initiate an unexpected change of context.',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    CrtID: '2.4.3',
    'Test Name': '2.4.3-focus-order-meaning',
    'Test ID': '4.F',
    'Test Category': '4 Keyboard/focus',
    'WCAG SC': '2.4.3',
    Level: 'A',
    'Test Condition':
      'The focus order preserves the meaning and operability of the web page. ',
    'Disability Impact':
      "Without Visionn,'With Limited Vision, With Limited Manipulation','With Limited Language, Cognitive and Learning Abilities",
  },
  {
    CrtID: '2.4.3',
    'Test Name': '2.4.3-focus-order-reveal',
    'Test ID': '4.G',
    'Test Category': '4 Keyboard/focus',
    'WCAG SC': '2.4.3',
    Level: 'A',
    'Test Condition': 'Focus is moved to revealed content.',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Manipulation, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    CrtID: '2.4.3',
    'Test Name': '2.4.3-focus-order-return',
    'Test ID': '4.H',
    'Test Category': '4 Keyboard/focus',
    'WCAG SC': '2.4.3',
    Level: 'A',
    'Test Condition': 'Focus is returned to the logical sequence.',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Manipulation, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    CrtID: '3.3.2',
    'Test Name': '3.3.2-label-provided',
    'Test ID': '5.A',
    'Test Category': '5 Forms',
    'WCAG SC': '3.3.2',
    Level: 'A',
    'Test Condition': 'Labels or instructions are provided for form elements.',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    CrtID: '2.4.6',
    'Test Name': '2.4.6-label-descriptive',
    'Test ID': '5.B',
    'Test Category': '5 Forms',
    'WCAG SC': '2.4.6',
    Level: 'AA',
    'Test Condition': 'Each form label is sufficiently descriptive. ',
    'Disability Impact':
      "Without Vision, With Limited Vision, With Limited Manipulation' ,'With Limited Language, Cognitive and Learning Abilities",
  },
  {
    CrtID: '1.3.1',
    'Test Name': '1.3.1-programmatic-label',
    'Test ID': '5.C',
    'Test Category': '5 Forms',
    'WCAG SC': '1.3.1',
    Level: 'A',
    'Test Condition':
      'The combination of the accessible name, accessible description, and other programmatic associations (e.g., table column and/or row associations) describes each input field and includes all relevant instructions and cues (textual and graphical).',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    CrtID: '3.2.2',
    'Test Name': '3.2.2-on-input',
    'Test ID': '5.D',
    'Test Category': '5 Forms',
    'WCAG SC': '3.2.2',
    Level: 'A',
    'Test Condition':
      'Changing field values/selections (e.g., entering data in a text field, changing a radio button section) does NOT initiate and unexpected change of context.',
    'Disability Impact':
      'Without Vision, Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    CrtID: '4.1.2',
    'Test Name': '4.1.2-change-notify-form',
    'Test ID': '5.E ',
    'Test Category': '5 Forms',
    'WCAG SC': '4.1.2',
    Level: 'A',
    'Test Condition':
      'The page provides notification of each form-related change in content.',
    'Disability Impact':
      "Without Vision, With Limited Vision','With Limited Language, Cognitive and Learning Abilities",
  },
  {
    CrtID: '3.3.1',
    'Test Name': '3.3.1-error-identification',
    'Test ID': '5.F ',
    'Test Category': '5 Forms ',
    'WCAG SC': '3.3.1',
    Level: 'A',
    'Test Condition':
      'The item in error is identified in text and sufficiently described to the user in text.',
    'Disability Impact':
      "Without Vision, With Limited Vision','Without Perception of Color, With Limited Language, Cognitive and Learning Abilities",
  },
  {
    CrtID: '3.3.3',
    'Test Name': '3.3.3-error-suggestion',
    'Test ID': '5.G ',
    'Test Category': '5 Forms ',
    'WCAG SC': '3.3.3',
    Level: 'AA',
    'Test Condition':
      'Guidance (e.g., suggestion for corrected input) is provided about how to correct errors for form fields.',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Manipulation, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    CrtID: '3.3.4',
    'Test Name': '3.3.4-error-prevention',
    'Test ID': '5.H ',
    'Test Category': '5 Forms ',
    'WCAG SC': '3.3.4',
    Level: 'AA',
    'Test Condition':
      'The web page allows the user to check, reverse, and/or confirm submission.',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Manipulation, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    CrtID: '2.4.4',
    'Test Name': '2.4.4-link-purpose',
    'Test ID': ' 6.A',
    'Test Category': '6 Links/buttons',
    'WCAG SC': '2.4.4',
    Level: 'A',
    'Test Condition':
      'The purpose of each link or button can be determined from any combination of the link/button text, accessible name, accessible description, and/or programmatically determined link/button context.',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Manipulation, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    CrtID: '4.1.2',
    'Test Name': '4.1.2-change-notify-links',
    'Test ID': '6. B',
    'Test Category': '6 Links/buttons ',
    'WCAG SC': '4.1.2',
    Level: 'A',
    'Test Condition':
      'The page provides notification of each change in content that is the result of interaction with a link or button.',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    CrtID: '1.1.1',
    'Test Name': ' 1.1.1-meaningful-image-name',
    'Test ID': ' 7.A',
    'Test Category': ' 7 Images',
    'WCAG SC': '1.1.1',
    Level: 'A',
    'Test Condition':
      ' The accessible name and accessible description for a meaningful image provides an equivalent description of the image.',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    CrtID: '1.1.1',
    'Test Name': '1.1.1-decorative-image',
    'Test ID': '7.B',
    'Test Category': ' 7 Images',
    'WCAG SC': '1.1.1',
    Level: 'A',
    'Test Condition':
      'There is no accessible name and accessible description for a decorative image.',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    CrtID: '1.1.1',
    'Test Name': '1.1.1-decorative-background-image',
    'Test ID': '7.C',
    'Test Category': '7 Images ',
    'WCAG SC': '1.1.1',
    Level: 'A',
    'Test Condition':
      'The background image is not the only means used to convey important information.',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    CrtID: '1.1.1',
    'Test Name': ' 1.1.1-captcha-alternative',
    'Test ID': '7. D',
    'Test Category': ' 7 Images',
    'WCAG SC': '1.1.1',
    Level: 'A',
    'Test Condition': ' Alternative forms of CAPTCHA are provided.',
    'Disability Impact':
      'Without Vision, With Limited Vision, Without Hearing, With Limited Hearing, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    CrtID: '1.4.5',
    'Test Name': '1.4.5-image-of-text',
    'Test ID': '7.E',
    'Test Category': '7 Images ',
    'WCAG SC': '1.4.5',
    Level: 'AA',
    'Test Condition':
      'The image of text cannot be replaced by text or is customizable.',
    'Disability Impact':
      'Without Vision, With Limited Vision, Without Perception of Color, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    CrtID: '2.2.1',
    'Test Name': '2.2.1-timing-adjustable',
    'Test ID': ' 8.A ',
    'Test Category': '8 Adjustable time limits',
    'WCAG SC': '2.2.1',
    Level: 'A',
    'Test Condition':
      'The user can turn off, adjust, or extend the time limit.',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Manipulation, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    CrtID: '2.4.1',
    'Test Name': '2.4.1-bypass-function',
    'Test ID': '9.A',
    'Test Category': '9 Repetitive Content',
    'WCAG SC': '2.4.1',
    Level: 'A',
    'Test Condition':
      'A keyboard-accessible method is provided to bypass repetitive content.',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Manipulation, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    CrtID: '3.2.3',
    'Test Name': '3.2.3-consistent- navigation',
    'Test ID': '9.B',
    'Test Category': '9 Repetitive Content',
    'WCAG SC': '3.2.3',
    Level: 'AA',
    'Test Condition':
      'Each navigational element occurs in the same relative order with regard to other repeated components on each web page where it appears.',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    CrtID: '3.2.4',
    'Test Name': '3.2.4-consistent-identification',
    'Test ID': '9.C',
    'Test Category': '9 Repetitive Content',
    'WCAG SC': '3.2.4',
    Level: 'AA',
    'Test Condition':
      'The accessible name and description is consistent for components that perform the same function.',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    CrtID: '2.4.6',
    'Test Name': '2.4.6-heading-purpose',
    'Test ID': '10.A',
    'Test Category': '10 Content Structure',
    'WCAG SC': '2.4.6',
    Level: 'AA',
    'Test Condition':
      'Each heading describes the topic or purpose of its content.',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    CrtID: '1.3.1',
    'Test Name': '1.3.1-heading-determinable',
    'Test ID': '10.B ',
    'Test Category': '10 Content Structure ',
    'WCAG SC': '1.3.1',
    Level: 'A',
    'Test Condition':
      'Each programmatically determinable heading is a visual heading and each visual heading is programmatically determinable.',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    CrtID: '1.3.1',
    'Test Name': '1.3.1-heading-level',
    'Test ID': '10.C',
    'Test Category': '10 Content Structure ',
    'WCAG SC': '1.3.1',
    Level: 'A',
    'Test Condition':
      'Programmatic heading levels logically match the visual heading presentation within the heading structure.',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    CrtID: '1.3.1',
    'Test Name': '1.3.1-list-type',
    'Test ID': '10.D',
    'Test Category': '10 Content Structure',
    'WCAG SC': '1.3.1',
    Level: 'A',
    'Test Condition':
      'All visually apparent lists are programmatically identified according to their type.',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    CrtID: '3.1.1',
    'Test Name': '3.1.1-page-language-defined',
    'Test ID': '11.A ',
    'Test Category': '11 Language',
    'WCAG SC': '3.1.1',
    Level: 'A',
    'Test Condition':
      'The default human language of each web page can be programmatically determined.',
    'Disability Impact':
      'Without Vision, With Limited Vision, Without Hearing, With Limited Hearing, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    CrtID: '3.1.2',
    'Test Name': '3.1.2-part-language-defined',
    'Test ID': '11.B ',
    'Test Category': '11 Language',
    'WCAG SC': '3.1.2',
    Level: 'A',
    'Test Condition':
      'The human language for any content segment that differs from the default human language of the page can be programmatically determined.',
    'Disability Impact':
      'Without Vision, With Limited Vision, Without Hearing, With Limited Hearing, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    CrtID: '2.4.2',
    'Test Name': '2.4.2-page-title-defined',
    'Test ID': '12.A',
    'Test Category': '12 Page and Frame Titles',
    'WCAG SC': '2.4.2',
    Level: 'A',
    'Test Condition': 'A title element is defined for the web page.',
    'Disability Impact':
      "Without Vision, With Limited Vision, With Limited Manipulation, With Limited Language, Cognitive and Learning Abilities' ",
  },
  {
    CrtID: '2.4.2',
    'Test Name': '2.4.2-page-title-purpose',
    'Test ID': '12.B',
    'Test Category': '12 Page and Frame Titles',
    'WCAG SC': '2.4.2',
    Level: 'A',
    'Test Condition':
      'The title element identifies the contents or purpose of the web page.',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Manipulation, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    CrtID: '4.1.2',
    'Test Name': '4.1.2-frame-title',
    'Test ID': '12.C',
    'Test Category': '12 Page and Frame Titles',
    'WCAG SC': '4.1.2',
    Level: 'A',
    'Test Condition':
      'Each frame has a title attribute that describes its content.',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    CrtID: '4.1.2',
    'Test Name': '4.1.2-iframe-name',
    'Test ID': '12.D',
    'Test Category': '12 Page and Frame Titles',
    'WCAG SC': '4.1.2',
    Level: 'A',
    'Test Condition':
      ' The combination of accessible name and description for each <iframe.> describes its content.',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    CrtID: '1.4.1',
    'Test Name': '1.4.1-color-meaning',
    'Test ID': '13.A',
    'Test Category': '13 Sensory and Color',
    'WCAG SC': '1.4.1',
    Level: 'A',
    'Test Condition':
      'Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.',
    'Disability Impact':
      'Without Vision, With Limited Vision, Without Perception of Color',
  },
  {
    CrtID: '1.3.3',
    'Test Name': '1.3.3-sensory-info',
    'Test ID': '13.B',
    'Test Category': '13 Sensory and Color',
    'WCAG SC': '1.3.3',
    Level: 'A',
    'Test Condition':
      'Instructions provided for understanding and operating content do not rely solely on sensory characteristics of components, such as shape, size, visual location, orientation, or sound.',
    'Disability Impact':
      'Without Vision, With Limited Vision, Without Perception of Color, Without Hearing, With Limited Hearing',
  },
  {
    CrtID: '1.4.3',
    'Test Name': '1.4.3-contrast',
    'Test ID': '13.C',
    'Test Category': '13 Sensory and Color ',
    'WCAG SC': '1.4.3',
    Level: 'AA',
    'Test Condition':
      'The visual presentation of text and images of text have sufficient contrast.',
    'Disability Impact': "'With Limited Vision, Without Perception of Color",
  },
  {
    CrtID: '1.3.1',
    'Test Name': '1.3.1-table-identification',
    'Test ID': '14.A',
    'Test Category': '14 Tables',
    'WCAG SC': '1.3.1',
    Level: 'A',
    'Test Condition':
      'Each data table has programmatic markup to identify it as a table.',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    'Test Name': '1.3.1-cell-header-association',
    'Test ID': '14.B',
    'Test Category': '14 Tables',
    'WCAG SC': '1.3.1',
    Level: 'A',
    'Test Condition':
      ' All data cells are programmatically associated with relevant headers. ',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    CrtID: '1.3.1',
    'Test Name': '1.3.1-layout-table-structure',
    'Test ID': ' 14.C',
    'Test Category': '14 Tables ',
    'WCAG SC': '1.3.1 ',
    Level: 'A',
    'Test Condition':
      "The layout table DOES NOT designate the layout table using ARIA role= 'table' AND DOES NOT include table header structure and relationship elements and/or associated attributes.",
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    CrtID: '1.3.1',
    'Test Name': '1.3.1-meaningful-content-css-before-after',
    'Test ID': ' 15.A',
    'Test Category': '15 CSS',
    'WCAG SC': '1.3.1',
    Level: 'A',
    'Test Condition':
      'For the meaningful content provided via CSS pseudo-elements ::before and ::after, equivalent information is available in another way.',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    CrtID: '1.3.2',
    'Test Name': '1.3.2-content-order-meaning-css-position',
    'Test ID': '15.B ',
    'Test Category': '15 CSS',
    'WCAG SC': '1.3.2',
    Level: 'A',
    'Test Condition':
      'The reading order of the content (in context) is correct and the meaning of the content (in context) is preserved without CSS positioning.',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    CrtID: '1.2.1',
    'Test Name': '1.2.1-audio-transcript-text',
    'Test ID': '16.A ',
    'Test Category': '16 Audio/Video-Only',
    'WCAG SC': '1.2.1',
    Level: 'A',
    'Test Condition':
      'A text-based alternative is provided for audio-only content that provides an accurate and complete representation of the audio-only content.',
    'Disability Impact':
      "'Without Hearing, With Limited Hearing','With Limited Language, Cognitive and Learning Abilities' ",
  },
  {
    CrtID: '1.2.1',
    'Test Name': '1.2.1-video- alternative-equivalent',
    'Test ID': '16.B ',
    'Test Category': ' 16 Audio/Video-Only',
    'WCAG SC': '1.2.1',
    Level: 'A',
    'Test Condition':
      ' The video-only content information is also available through an equivalent text or audio alternative.',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    CrtID: '1.2.2',
    'Test Name': '1.2.2-captions-equivalent',
    'Test ID': '17.A',
    'Test Category': "17 Sync'd Media",
    'WCAG SC': '1.2.2',
    Level: 'A',
    'Test Condition':
      'The multimedia provides accurate captions for the audio content.',
    'Disability Impact':
      "'Without Hearing, With Limited Hearing, With Limited Language, Cognitive and Learning Abilities",
  },
  {
    CrtID: '1.2.5',
    'Test Name': '1.2.5-audio-description-equivalent',
    'Test ID': '17.B',
    'Test Category': "17 Sync'd Media",
    'WCAG SC': '1.2.5',
    Level: 'AA',
    'Test Condition':
      'The multimedia provides an equivalent soundtrack (combination of narration and audio descriptions) for the video content.',
    'Disability Impact':
      'Without Visionn, Without Vision, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    CrtID: '1.2.4',
    'Test Name': '1.2.4-captions-live-equivalent',
    'Test ID': '17.C',
    'Test Category': "17 Sync'd Media",
    'WCAG SC': '1.2.4',
    Level: 'AA',
    'Test Condition':
      'The live multimedia provides accurate captions for the audio content.',
    'Disability Impact':
      "'Without Hearing, With Limited Hearing, With Limited Language, Cognitive and Learning Abilities",
  },
  {
    CrtID: '503.4',
    'Test Name': '503.4-caption-description-controls',
    'Test ID': '17.D',
    'Test Category': "17 Sync'd Media",
    'WCAG SC': '503.4',
    Level: '',
    'Test Condition':
      'The media player provides user controls for closed captions and audio descriptions.',
    'Disability Impact':
      'Without Vision, With Limited Vision, Without Hearing, With Limited Hearing, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    CrtID: '503.4.1',
    'Test Name': '503.4.1-caption-control',
    'Test ID': '17.E ',
    'Test Category': "17 Sync'd Media",
    'WCAG SC': '503.4.1',
    Level: '',
    'Test Condition':
      'User controls for captions are provided at the same menu as the user controls for volume or program selection.',
    'Disability Impact':
      "'Without Hearing, With Limited Hearing, With Limited Manipulation, With Limited Language, Cognitive and Learning Abilities",
  },
  {
    CrtID: '503.4.2',
    'Test Name': '503.4.2-description-control',
    'Test ID': '17.F',
    'Test Category': "17 Sync'd Media",
    'WCAG SC': '503.4.2',
    Level: '',
    'Test Condition':
      'User controls for audio descriptions are provided at the same menu as the user controls for volume or program selection.',
    'Disability Impact':
      'Without Vision, With Limited Manipulation, With Limited Vision, With Limited Language, Cognitive and Learning Abilities',
  },
  {
    CrtID: '1.4.4',
    'Test Name': '1.4.4-resize-text',
    'Test ID': '18.A',
    'Test Category': '18 Resize Text',
    'WCAG SC': '1.4.4',
    Level: 'AA',
    'Test Condition':
      'There is a mechanism to resize, scale, or zoom in on the text to at least 200% of its original size without loss of content or functionality.',
    'Disability Impact': "'With Limited Vision",
  },
  {
    CrtID: '2.4.5',
    'Test Name': '2.4.5-multiple-ways',
    'Test ID': '19.A',
    'Test Category': '19 Multiple Ways',
    'WCAG SC': '2.4.5',
    Level: 'AA',
    'Test Condition':
      'There are two or more ways to locate a web page within a set of web pages.',
    'Disability Impact':
      "Without Vision, With Limited Vision','With Limited Manipulation, With Limited Language, Cognitive and Learning Abilities",
  },
  {
    CrtID: '4.1.1',
    'Test Name': '4.1.1-parsing',
    'Test ID': '20.A',
    'Test Category': '20 Parsing',
    'WCAG SC': '4.1.1',
    Level: 'A',
    'Test Condition': 'Not tested.',
    'Disability Impact':
      'Without Vision, With Limited Vision, With Limited Manipulation, With Limited Language, Cognitive and Learning Abilities',
  },
]
