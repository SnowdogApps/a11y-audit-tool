export const trustedTests = [
  {
    CrtID: 'Requirements',
    Guideline: ' ',
    Test: 'Alternate version ',
    TestName: ' Alt-version-conformant ',
    TestID: ' 1.A',
    TestCondition:
      'An alternate version passes all applicable Test Conditions in this test process.',
    GrpID: 'Does Not Apply',
    OptMenu1: 'menu3',
    DisabilityImpact:
      "'Without Vision', 'With Limited Vision', 'Without Perception of Color', 'Without Hearing', 'With Limited Hearing', 'Without Speech', 'With Limited Manipulation', 'With Limited Language, Cognitive, and Learning Abilities', 'Photosensitive Epilepsy / Photosensitive Seizure Disorders'",
  },
  {
    CrtID: 'Requirements',
    Guideline: ' ',
    Test: 'Alternate version',
    TestName: 'Alt-version-equivalent ',
    TestID: ' 1.B',
    TestCondition:
      'The accessible version is up to date with the same information and functionality.',
    GrpID: 'Does Not Apply',
    OptMenu1: 'menu3',
    DisabilityImpact:
      "'Without Vision', 'With Limited Vision', 'Without Perception of Color', 'Without Hearing', 'With Limited Hearing', 'Without Speech', 'With Limited Manipulation', 'With Limited Language, Cognitive, and Learning Abilities', 'Photosensitive Epilepsy / Photosensitive Seizure Disorders'",
  },
  {
    CrtID: 'Requirements',
    Guideline: ' ',
    Test: 'Alternate version',
    TestName: 'Alt-version-access',
    TestID: '1.C',
    TestCondition:
      'The mechanism to reach the accessible equivalent version from the non-conforming page is accessible.',
    GrpID: 'Does Not Apply',
    OptMenu1: 'menu3',
    DisabilityImpact:
      "'Without Vision', 'With Limited Vision', 'Without Perception of Color', 'Without Hearing', 'With Limited Hearing', 'Without Speech', 'With Limited Manipulation', 'With Limited Language, Cognitive, and Learning Abilities', 'Photosensitive Epilepsy / Photosensitive Seizure Disorders'",
  },
  {
    CrtID: 'Requirements',
    Guideline: ' ',
    Test: 'Alternate version',
    TestName: 'Alt-version-nc-access',
    TestID: '1.D',
    TestCondition:
      'The non-conforming version(s) can only be reached from conforming content.',
    GrpID: 'Does Not Apply',
    OptMenu1: 'menu3',
    DisabilityImpact:
      "'Without Vision', 'With Limited Vision', 'Without Perception of Color', 'Without Hearing', 'With Limited Hearing', 'Without Speech', 'With Limited Manipulation', 'With Limited Language, Cognitive, and Learning Abilities', 'Photosensitive Epilepsy / Photosensitive Seizure Disorders'",
  },
  {
    CrtID: 'Requirements',
    Guideline: ' ',
    Test: 'Non-interference',
    TestName: 'Non-interference',
    TestID: '1.E',
    TestCondition:
      'Content in the non-conforming version(s) meets Conformance Requirement 5.',
    GrpID: 'Does Not Apply',
    OptMenu1: 'menu2',
    DisabilityImpact:
      "'Without Vision', 'With Limited Vision', 'Without Perception of Color', 'Without Hearing', 'With Limited Hearing', 'Without Speech', 'With Limited Manipulation', 'With Limited Language, Cognitive, and Learning Abilities', 'Photosensitive Epilepsy / Photosensitive Seizure Disorders'",
  },
  {
    CrtID: '1.4.2',
    Guideline: 'Level A',
    Test: '2 Autoplay/update',
    TestName: '1.4.2-Audio-control',
    TestID: '2.A',
    TestCondition:
      'The user can pause, stop, or control the volume of audio content that plays automatically.',
    GrpID: '',
    OptMenu1: 'menu2',
    DisabilityImpact:
      "'Without Vision', 'With Limited Vision', 'With Limited Hearing', 'With Limited Language, Cognitive, and Learning Abilities'",
  },
  {
    CrtID: '2.2.2',
    Guideline: 'Level A',
    Test: '2 Autoplay/update',
    TestName: '2.2.2-Blinking-moving-scrolling',
    TestID: '2.B',
    TestCondition:
      'The user can pause, stop, or hide moving, blinking, or scrolling content.',
    GrpID: '',
    OptMenu1: 'menu2',
    DisabilityImpact:
      "'Photosensitive Epilepsy / Photosensitive Seizure Disorders', 'With Limited Vision', 'With Limited Language, Cognitive, and Learning Abilities'",
  },
  {
    CrtID: '2.2.2',
    Guideline: 'Level A',
    Test: '2 Autoplay/update',
    TestName: '2.2.2-Auto-updating',
    TestID: '2.C',
    TestCondition:
      'The user can pause, stop, hide, or control the frequency of automatically updating content.',
    GrpID: '',
    OptMenu1: 'menu2',
    DisabilityImpact:
      "'Without Vision', 'With Limited Vision', 'With Limited Language, Cognitive, and Learning Abilities'",
  },
  {
    CrtID: '4.1.2',
    Guideline: 'Level A',
    Test: '2 Autoplay/update',
    TestName: '4.1.2-change-notify-auto',
    TestID: '2.D',
    TestCondition:
      'The page provides notification of each automatic update/change in content.',
    GrpID: '',
    OptMenu1: 'menu2',
    DisabilityImpact:
      "'Without Vision', 'With Limited Vision', 'With Limited Language, Cognitive, and Learning Abilities'",
  },
  {
    CrtID: '2.3.1',
    Guideline: 'Level A',
    Test: '3 Flashing',
    TestName: '2.3.1-flashing',
    TestID: '3.A',
    TestCondition:
      'If NO flashing content is found, then this Test Condition is DOES NOT APPLY (Requirements). If flashing content IS found, then this test should be recorded as NOT TESTED.',
    GrpID: '',
    OptMenu1: 'menu1',
    DisabilityImpact:
      "'Photosensitive Epilepsy / Photosensitive Seizure Disorders'",
  },
  {
    CrtID: '2.1.1',
    Guideline: 'Level A',
    Test: '4 Keyboard/focus',
    TestName: '2.1.1-keyboard-access',
    TestID: '4.A',
    TestCondition:
      'All functionality can be accessed and executed using only the keyboard.',
    GrpID: 'Does Not Apply',
    OptMenu1: 'menu2',
    DisabilityImpact:
      "'Without Vision', 'With Limited Vision', 'With Limited Manipulation'",
  },
  {
    CrtID: '2.1.1',
    Guideline: 'Level A',
    Test: '4 Keyboard/focus',
    TestName: '2.1.1-no-keystroke-timing',
    TestID: '4.B',
    TestCondition:
      'Individual keystrokes do not require specific timings for activation of functionality.',
    GrpID: 'Does Not Apply',
    OptMenu1: 'menu2',
    DisabilityImpact:
      "'Without Vision', 'With Limited Language, Cognitive, and Learning Abilities', 'With Limited Vision', 'With Limited Manipulation'",
  },
  {
    CrtID: '2.1.2',
    Guideline: 'Level A',
    Test: '4 Keyboard/focus',
    TestName: '2.1.2-no-keyboard-trap',
    TestID: '4.C',
    TestCondition: 'There is no keyboard trap.',
    GrpID: 'Does Not Apply',
    OptMenu1: 'menu2',
    DisabilityImpact:
      "'Without Vision','With Limited Vision','With Limited Manipulation'",
  },
  {
    CrtID: '2.4.7',
    Guideline: 'Level AA',
    Test: '4 Keyboard/focus',
    TestName: '2.4.7-focus-visible',
    TestID: '4.D',
    TestCondition:
      'A visible indication of focus is provided when focus is on the interface component.',
    GrpID: 'Does Not Apply',
    OptMenu1: 'menu2',
    DisabilityImpact:
      "'With Limited Vision','With Limited Manipulation','With Limited Language, Cognitive, and Learning Abilities'",
  },
  {
    CrtID: '3.2.1',
    Guideline: 'Level A',
    Test: '4 Keyboard/focus',
    TestName: '3.2.1-on-focus',
    TestID: '4.E',
    TestCondition:
      'When an interface component receives focus, it does not initiate an unexpected change of context.',
    GrpID: 'Does Not Apply',
    OptMenu1: 'menu2',
    DisabilityImpact:
      "'Without Vision', 'With Limited Vision', 'With Limited Language, Cognitive, and Learning Abilities'",
  },
  {
    CrtID: '2.4.3',
    Guideline: 'Level A',
    Test: '4 Keyboard/focus',
    TestName: '2.4.3-focus-order-meaning',
    TestID: '4.F',
    TestCondition:
      'The focus order preserves the meaning and operability of the web page. ',
    GrpID: 'Does Not Apply',
    OptMenu1: 'menu2',
    DisabilityImpact:
      "'Without Vision','With Limited Vision', 'With Limited Manipulation','With Limited Language, Cognitive, and Learning Abilities'",
  },
  {
    CrtID: '2.4.3',
    Guideline: 'Level A',
    Test: '4 Keyboard/focus',
    TestName: '2.4.3-focus-order-reveal',
    TestID: '4.G',
    TestCondition: 'Focus is moved to revealed content.',
    GrpID: 'Does Not Apply',
    OptMenu1: 'menu2',
    DisabilityImpact:
      "'Without Vision', 'With Limited Vision', 'With Limited Manipulation', 'With Limited Language, Cognitive, and Learning Abilities'",
  },
  {
    CrtID: '2.4.3',
    Guideline: 'Level A',
    Test: '4 Keyboard/focus',
    TestName: '2.4.3-focus-order-return',
    TestID: '4.H',
    TestCondition: 'Focus is returned to the logical sequence.',
    GrpID: 'Does Not Apply',
    OptMenu1: 'menu2',
    DisabilityImpact:
      "'Without Vision', 'With Limited Vision', 'With Limited Manipulation', 'With Limited Language, Cognitive, and Learning Abilities'",
  },
  {
    CrtID: '3.3.2',
    Guideline: 'Level A',
    Test: '5 Forms',
    TestName: '3.3.2-label-provided',
    TestID: '5.A',
    TestCondition: 'Labels or instructions are provided for form elements.',
    GrpID: 'Does Not Apply',
    OptMenu1: 'menu2',
    DisabilityImpact:
      "'Without Vision', 'With Limited Vision', 'With Limited Language, Cognitive, and Learning Abilities'",
  },
  {
    CrtID: '2.4.6',
    Guideline: 'Level AA',
    Test: '5 Forms',
    TestName: '2.4.6-label-descriptive',
    TestID: '5.B',
    TestCondition: 'Each form label is sufficiently descriptive. ',
    GrpID: 'Does Not Apply',
    OptMenu1: 'menu2',
    DisabilityImpact:
      "'Without Vision', 'With Limited Vision', 'With Limited Manipulation' ,'With Limited Language, Cognitive, and Learning Abilities'",
  },
  {
    CrtID: '1.3.1',
    Guideline: 'Level A',
    Test: '5 Forms',
    TestName: '1.3.1-programmatic-label',
    TestID: '5.C',
    TestCondition:
      'The combination of the accessible name, accessible description, and other programmatic associations (e.g., table column and/or row associations) describes each input field and includes all relevant instructions and cues (textual and graphical).',
    GrpID: 'Does Not Apply',
    OptMenu1: 'menu2',
    DisabilityImpact:
      "'Without Vision', 'With Limited Vision', 'With Limited Language, Cognitive, and Learning Abilities'",
  },
  {
    CrtID: '3.2.2',
    Guideline: 'Level A',
    Test: '5 Forms',
    TestName: '3.2.2-on-input',
    TestID: '5.D',
    TestCondition:
      'Changing field values/selections (e.g., entering data in a text field, changing a radio button section) does NOT initiate and unexpected change of context.',
    GrpID: 'Does Not Apply',
    OptMenu1: 'menu2',
    DisabilityImpact:
      "'Without Vision', 'Without Vision', 'With Limited Vision', 'With Limited Language, Cognitive, and Learning Abilities'",
  },
  {
    CrtID: '4.1.2',
    Guideline: 'Level A',
    Test: '5 Forms',
    TestName: '4.1.2-change-notify-form',
    TestID: '5.E ',
    TestCondition:
      'The page provides notification of each form-related change in content.',
    GrpID: 'Does Not Apply',
    OptMenu1: 'menu2',
    DisabilityImpact:
      "'Without Vision', 'With Limited Vision','With Limited Language, Cognitive, and Learning Abilities'",
  },
  {
    CrtID: '3.3.1',
    Guideline: 'Level A',
    Test: '5 Forms ',
    TestName: '3.3.1-error-identification',
    TestID: '5.F ',
    TestCondition:
      'The item in error is identified in text and sufficiently described to the user in text.',
    GrpID: 'Does Not Apply',
    OptMenu1: 'menu2',
    DisabilityImpact:
      "'Without Vision', 'With Limited Vision','Without Perception of Color', 'With Limited Language, Cognitive, and Learning Abilities'",
  },
  {
    CrtID: '3.3.3',
    Guideline: 'Level AA',
    Test: '5 Forms ',
    TestName: '3.3.3-error-suggestion',
    TestID: '5.G ',
    GrpID: 'Does Not Apply',
    OptMenu1: 'menu2',
    TestCondition:
      'Guidance (e.g., suggestion for corrected input) is provided about how to correct errors for form fields.',
    DisabilityImpact:
      "'Without Vision', 'With Limited Vision', 'With Limited Manipulation', 'With Limited Language, Cognitive, and Learning Abilities'",
  },
  {
    CrtID: '3.3.4',
    Guideline: 'Level AA',
    Test: '5 Forms ',
    TestName: '3.3.4-error-prevention',
    TestID: '5.H ',
    GrpID: 'Does Not Apply',
    OptMenu1: 'menu2',
    TestCondition:
      'The web page allows the user to check, reverse, and/or confirm submission.',
    DisabilityImpact:
      "'Without Vision', 'With Limited Vision', 'With Limited Manipulation', 'With Limited Language, Cognitive, and Learning Abilities'",
  },
  {
    CrtID: '2.4.4',
    Guideline: 'Level A',
    Test: '6 Links/buttons',
    TestName: '2.4.4-link-purpose',
    TestID: ' 6.A',
    GrpID: '',
    OptMenu1: 'menu2',
    TestCondition:
      'The purpose of each link or button can be determined from any combination of the link/button text, accessible name, accessible description, and/or programmatically determined link/button context.',
    DisabilityImpact:
      "'Without Vision', 'With Limited Vision', 'With Limited Manipulation', 'With Limited Language, Cognitive, and Learning Abilities'",
  },
  {
    CrtID: '4.1.2',
    Guideline: 'Level A',
    Test: '6 Links/buttons ',
    TestName: '4.1.2-change-notify-links',
    TestID: '6. B',
    TestCondition:
      'The page provides notification of each change in content that is the result of interaction with a link or button.',
    GrpID: '',
    OptMenu1: 'menu2',
    DisabilityImpact:
      "'Without Vision', 'With Limited Vision', 'With Limited Language, Cognitive, and Learning Abilities'",
  },
  {
    CrtID: '1.1.1',
    Guideline: 'Level A',
    Test: ' 7 Images',
    TestName: ' 1.1.1-meaningful-image-name',
    TestID: ' 7.A',
    TestCondition:
      ' The accessible name and accessible description for a meaningful image provides an equivalent description of the image.',
    GrpID: '',
    OptMenu1: 'menu2',
    DisabilityImpact:
      "'Without Vision', 'With Limited Vision', 'With Limited Language, Cognitive, and Learning Abilities'",
  },
  {
    CrtID: '1.1.1',
    Guideline: 'Level A',
    Test: ' 7 Images',
    TestName: '1.1.1-decorative-image',
    TestID: '7.B',
    TestCondition:
      'There is no accessible name and accessible description for a decorative image.',
    GrpID: '',
    OptMenu1: 'menu2',
    DisabilityImpact:
      "'Without Vision', 'With Limited Vision', 'With Limited Language, Cognitive, and Learning Abilities'",
  },
  {
    CrtID: '1.1.1',
    Guideline: 'Level A',
    Test: '7 Images ',
    TestName: '1.1.1-decorative-background-image',
    TestID: '7.C',
    TestCondition:
      'The background image is not the only means used to convey important information.',
    GrpID: '',
    OptMenu1: 'menu2',
    DisabilityImpact:
      "'Without Vision', 'With Limited Vision', 'With Limited Language, Cognitive, and Learning Abilities'",
  },
  {
    CrtID: '1.1.1',
    Guideline: 'Level A',
    Test: ' 7 Images',
    TestName: ' 1.1.1-captcha-alternative',
    TestID: '7. D',
    TestCondition: ' Alternative forms of CAPTCHA are provided.',
    GrpID: '',
    OptMenu1: 'menu2',
    DisabilityImpact:
      "'Without Vision', 'With Limited Vision', 'Without Hearing', 'With Limited Hearing', 'With Limited Language, Cognitive, and Learning Abilities'",
  },
  {
    CrtID: '1.4.5',
    Guideline: 'Level AA',
    Test: '7 Images ',
    TestName: '1.4.5-image-of-text',
    TestID: '7.E',
    TestCondition:
      'The image of text cannot be replaced by text or is customizable.',
    GrpID: '',
    OptMenu1: 'menu2',
    DisabilityImpact:
      "'Without Vision', 'With Limited Vision', 'Without Perception of Color', 'With Limited Language, Cognitive, and Learning Abilities'",
  },
  {
    CrtID: '2.2.1',
    Guideline: 'Level A',
    Test: '8 Adjustable time limits',
    TestName: '2.2.1-timing-adjustable',
    TestID: ' 8.A ',
    TestCondition: 'The user can turn off, adjust, or extend the time limit.',
    GrpID: '',
    OptMenu1: 'menu2',
    DisabilityImpact:
      "'Without Vision', 'With Limited Vision', 'With Limited Manipulation', 'With Limited Language, Cognitive, and Learning Abilities'",
  },
  {
    CrtID: '2.4.1',
    Guideline: 'Level A',
    Test: '9 Repetitive Content',
    TestName: '2.4.1-bypass-function',
    TestID: '9.A',
    TestCondition:
      'A keyboard-accessible method is provided to bypass repetitive content.',
    GrpID: '',
    OptMenu1: 'menu2',
    DisabilityImpact:
      "'Without Vision', 'With Limited Vision', 'With Limited Manipulation', 'With Limited Language, Cognitive, and Learning Abilities'",
  },
  {
    CrtID: '3.2.3',
    Guideline: 'Level AA',
    Test: '9 Repetitive Content',
    TestName: '3.2.3-consistent- navigation',
    TestID: '9.B',
    TestCondition:
      'Each navigational element occurs in the same relative order with regard to other repeated components on each web page where it appears.',
    GrpID: '',
    OptMenu1: 'menu2',
    DisabilityImpact:
      "'Without Vision', 'With Limited Vision', 'With Limited Language, Cognitive, and Learning Abilities'",
  },
  {
    CrtID: '3.2.4',
    Guideline: 'Level AA',
    Test: '9 Repetitive Content',
    TestName: '3.2.4-consistent-identification',
    TestID: '9.C',
    TestCondition:
      'The accessible name and description is consistent for components that perform the same function.',
    GrpID: '',
    OptMenu1: 'menu2',
    DisabilityImpact:
      "'Without Vision', 'With Limited Vision', 'With Limited Language, Cognitive, and Learning Abilities'",
  },
  {
    CrtID: '2.4.6',
    Guideline: 'Level AA',
    Test: '10 Content Structure',
    TestName: '2.4.6-heading-purpose',
    TestID: '10.A',
    TestCondition:
      ' Each heading describes the topic or purpose of its content.',
    GrpID: '',
    OptMenu1: 'menu2',
    DisabilityImpact:
      "'Without Vision', 'With Limited Vision', 'With Limited Language, Cognitive, and Learning Abilities'",
  },
  {
    CrtID: '1.3.1',
    Guideline: 'Level A',
    Test: '10 Content Structure ',
    TestName: '1.3.1-heading-determinable',
    TestID: '10.B ',
    TestCondition:
      'Each programmatically determinable heading is a visual heading and each visual heading is programmatically determinable.',
    GrpID: '',
    OptMenu1: 'menu2',
    DisabilityImpact:
      "'Without Vision', 'With Limited Vision', 'With Limited Language, Cognitive, and Learning Abilities'",
  },
  {
    CrtID: '1.3.1',
    Guideline: 'Level A',
    Test: '10 Content Structure ',
    TestName: '1.3.1-heading-level',
    TestID: '10.C',
    TestCondition:
      'Programmatic heading levels logically match the visual heading presentation within the heading structure.',
    GrpID: '',
    OptMenu1: 'menu2',
    DisabilityImpact:
      "'Without Vision', 'With Limited Vision', 'With Limited Language, Cognitive, and Learning Abilities'",
  },
  {
    CrtID: '1.3.1',
    Guideline: 'Level A',
    Test: '10 Content Structure',
    TestName: '1.3.1-list-type',
    TestID: '10.D',
    TestCondition:
      'All visually apparent lists are programmatically identified according to their type.',
    GrpID: '',
    OptMenu1: 'menu2',
    DisabilityImpact:
      "'Without Vision', 'With Limited Vision', 'With Limited Language, Cognitive, and Learning Abilities'",
  },
  {
    CrtID: '3.1.1',
    Guideline: 'Level A',
    Test: '11 Language',
    TestName: '3.1.1-page-language-defined',
    TestID: '11.A ',
    TestCondition:
      'The default human language of each web page can be programmatically determined.',
    GrpID: '',
    OptMenu1: 'menu5',
    DisabilityImpact:
      "'Without Vision', 'With Limited Vision', 'Without Hearing', 'With Limited Hearing', 'With Limited Language, Cognitive, and Learning Abilities'",
  },
  {
    CrtID: '3.1.2',
    Guideline: 'Level A',
    Test: '11 Language',
    TestName: '3.1.2-part-language-defined',
    TestID: '11.B ',
    TestCondition:
      'The human language for any content segment that differs from the default human language of the page can be programmatically determined.',
    GrpID: '',
    OptMenu1: 'menu2',
    DisabilityImpact:
      "'Without Vision', 'With Limited Vision', 'Without Hearing', 'With Limited Hearing', 'With Limited Language, Cognitive, and Learning Abilities'",
  },
  {
    CrtID: '2.4.2',
    Guideline: 'Level A',
    Test: '12 Page and Frame Titles',
    TestName: '2.4.2-page-title-defined',
    TestID: '12.A',
    TestCondition: 'A title element is defined for the web page.',
    GrpID: '',
    OptMenu1: 'menu5',
    DisabilityImpact:
      "'Without Vision', 'With Limited Vision', 'With Limited Manipulation', 'With Limited Language, Cognitive, and Learning Abilities' ",
  },
  {
    CrtID: '2.4.2',
    Guideline: 'Level A',
    Test: '12 Page and Frame Titles',
    TestName: '2.4.2-page-title-purpose',
    TestID: '12.B',
    TestCondition:
      'The title element identifies the contents or purpose of the web page.',
    GrpID: '',
    OptMenu1: 'menu5',
    DisabilityImpact:
      "'Without Vision', 'With Limited Vision', 'With Limited Manipulation', 'With Limited Language, Cognitive, and Learning Abilities'",
  },
  {
    CrtID: '4.1.2',
    Guideline: 'Level A',
    Test: '12 Page and Frame Titles',
    TestName: '4.1.2-frame-title',
    TestID: '12.C',
    TestCondition:
      'Each frame has a title attribute that describes its content.',
    GrpID: '',
    OptMenu1: 'menu2',
    DisabilityImpact:
      "'Without Vision', 'With Limited Vision', 'With Limited Language, Cognitive, and Learning Abilities'",
  },
  {
    CrtID: '4.1.2',
    Guideline: 'Level A',
    Test: '12 Page and Frame Titles',
    TestName: '4.1.2-iframe-name',
    TestID: '12.D',
    TestCondition:
      ' The combination of accessible name and description for each <iframe.> describes its content.',
    GrpID: '',
    OptMenu1: 'menu2',
    DisabilityImpact:
      "'Without Vision', 'With Limited Vision', 'With Limited Language, Cognitive, and Learning Abilities'",
  },
  {
    CrtID: '1.4.1',
    Guideline: 'Level A',
    Test: '13 Sensory and Color',
    TestName: '1.4.1-color-meaning',
    TestID: '13.A',
    TestCondition:
      'Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.',
    GrpID: '',
    OptMenu1: 'menu2',
    DisabilityImpact:
      "'Without Vision', 'With Limited Vision', 'Without Perception of Color'",
  },
  {
    CrtID: '1.3.3',
    Guideline: 'Level A',
    Test: '13 Sensory and Color',
    TestName: '1.3.3-sensory-info',
    TestID: '13.B',
    TestCondition:
      'Instructions provided for understanding and operating content do not rely solely on sensory characteristics of components, such as shape, size, visual location, orientation, or sound.',
    GrpID: '',
    OptMenu1: 'menu2',
    DisabilityImpact:
      "'Without Vision', 'With Limited Vision', 'Without Perception of Color', 'Without Hearing', 'With Limited Hearing'",
  },
  {
    CrtID: '1.4.3',
    Guideline: 'Level AA',
    Test: '13 Sensory and Color ',
    TestName: '1.4.3-contrast',
    TestID: '13.C',
    TestCondition:
      'The visual presentation of text and images of text have sufficient contrast.',
    GrpID: '',
    OptMenu1: 'menu2',
    DisabilityImpact: "'With Limited Vision', 'Without Perception of Color'",
  },
  {
    CrtID: '1.3.1',
    Guideline: 'Level A',
    Test: '14 Tables',
    TestName: '1.3.1-table-identification',
    TestID: '14.A',
    TestCondition:
      'Each data table has programmatic markup to identify it as a table.',
    GrpID: 'Does Not Apply',
    OptMenu1: 'menu2',
    DisabilityImpact:
      "'Without Vision', 'With Limited Vision', 'With Limited Language, Cognitive, and Learning Abilities'",
  },
  {
    CrtID: '1.3.1',
    Guideline: 'Level A',
    Test: '14 Tables',
    TestName: '1.3.1-cell-header-association',
    TestID: '14.B',
    TestCondition:
      ' All data cells are programmatically associated with relevant headers. ',
    GrpID: 'Does Not Apply',
    OptMenu1: 'menu2',
    DisabilityImpact:
      "'Without Vision', 'With Limited Vision', 'With Limited Language, Cognitive, and Learning Abilities'",
  },
  {
    CrtID: '1.3.1 ',
    Guideline: 'Level A',
    Test: '14 Tables ',
    TestName: '1.3.1-layout-table-structure',
    TestID: ' 14.C',
    TestCondition:
      "The layout table DOES NOT designate the layout table using ARIA role= 'table' AND DOES NOT include table header structure and relationship elements and/or associated attributes.",
    GrpID: '',
    OptMenu1: 'menu2',
    DisabilityImpact:
      "'Without Vision', 'With Limited Vision', 'With Limited Language, Cognitive, and Learning Abilities'",
  },
  {
    CrtID: '1.3.1',
    Guideline: 'Level A',
    Test: '15 CSS',
    TestName: '1.3.1-meaningful-content-css-before-after',
    TestID: ' 15.A',
    TestCondition:
      'For the meaningful content provided via CSS pseudo-elements ::before and ::after, equivalent information is available in another way.',
    GrpID: '',
    OptMenu1: 'menu2',
    DisabilityImpact:
      "'Without Vision', 'With Limited Vision', 'With Limited Language, Cognitive, and Learning Abilities'",
  },
  {
    CrtID: '1.3.2',
    Guideline: 'Level A',
    Test: '15 CSS',
    TestName: '1.3.2-content-order-meaning-css-position',
    TestID: '15.B ',
    TestCondition:
      'The reading order of the content (in context) is correct and the meaning of the content (in context) is preserved without CSS positioning.',
    GrpID: '',
    OptMenu1: 'menu2',
    DisabilityImpact:
      "'Without Vision', 'With Limited Vision', 'With Limited Language, Cognitive, and Learning Abilities'",
  },
  {
    CrtID: '1.2.1',
    Guideline: 'Level A',
    Test: '16 Audio/Video-Only',
    TestName: '1.2.1-audio-transcript-text',
    TestID: '16.A ',
    TestCondition:
      'A text-based alternative is provided for audio-only content that provides an accurate and complete representation of the audio-only content.',
    GrpID: '',
    OptMenu1: 'menu2',
    DisabilityImpact:
      "'Without Hearing', 'With Limited Hearing','With Limited Language, Cognitive, and Learning Abilities' ",
  },
  {
    CrtID: '1.2.1',
    Guideline: 'Level A',
    Test: ' 16 Audio/Video-Only',
    TestName: '1.2.1-video- alternative-equivalent',
    TestID: '16.B ',
    TestCondition:
      ' The video-only content information is also available through an equivalent text or audio alternative.',
    GrpID: '',
    OptMenu1: 'menu2',
    DisabilityImpact:
      "'Without Vision', 'With Limited Vision', 'With Limited Language, Cognitive, and Learning Abilities",
  },
  {
    CrtID: '1.2.2',
    Guideline: 'Level A',
    Test: "17 Sync'd Media",
    TestName: '1.2.2-captions-equivalent',
    TestID: '17.A',
    TestCondition:
      'The multimedia provides accurate captions for the audio content.',
    GrpID: 'Does Not Apply',
    OptMenu1: 'menu2',
    DisabilityImpact:
      "'Without Hearing', 'With Limited Hearing', 'With Limited Language, Cognitive, and Learning Abilities'",
  },
  {
    CrtID: '1.2.5',
    Guideline: 'Level AA',
    Test: "17 Sync'd Media",
    TestName: '1.2.5-audio-description-equivalent',
    TestID: '17.B',
    TestCondition:
      'The multimedia provides an equivalent soundtrack (combination of narration and audio descriptions) for the video content.',
    GrpID: 'Does Not Apply',
    OptMenu1: 'menu2',
    DisabilityImpact:
      "'Without Vision', 'Without Vision', 'With Limited Vision', 'With Limited Language, Cognitive, and Learning Abilities'",
  },
  {
    CrtID: '1.2.4',
    Guideline: 'Level AA',
    Test: "17 Sync'd Media",
    TestName: '1.2.4-captions-live-equivalent',
    TestID: '17.C',
    TestCondition:
      'The live multimedia provides accurate captions for the audio content.',
    GrpID: '',
    OptMenu1: 'menu2',
    DisabilityImpact:
      "'Without Hearing', 'With Limited Hearing', 'With Limited Language, Cognitive, and Learning Abilities'",
  },
  {
    CrtID: '503.4',
    Guideline: ' ',
    Test: "17 Sync'd Media",
    TestName: '503.4-caption-description-controls',
    TestID: '17.D',
    TestCondition:
      'The media player provides user controls for closed captions and audio descriptions.',
    GrpID: 'Does Not Apply',
    OptMenu1: 'menu2',
    DisabilityImpact:
      "'Without Vision', 'With Limited Vision', 'Without Hearing', 'With Limited Hearing', 'With Limited Language, Cognitive, and Learning Abilities'",
  },
  {
    CrtID: '503.4.1',
    Guideline: ' ',
    Test: "17 Sync'd Media",
    TestName: '503.4.1-caption-control',
    TestID: '17.E ',
    TestCondition:
      'User controls for captions are provided at the same menu level as the user controls for volume or program selection.',
    GrpID: 'Does Not Apply',
    OptMenu1: 'menu2',
    DisabilityImpact:
      "'Without Hearing', 'With Limited Hearing', 'With Limited Manipulation', 'With Limited Language, Cognitive, and Learning Abilities'",
  },
  {
    CrtID: '503.4.2',
    Guideline: ' ',
    Test: "17 Sync'd Media",
    TestName: '503.4.2-description-control',
    TestID: '17.F',
    TestCondition:
      'User controls for audio descriptions are provided at the same menu level as the user controls for volume or program selection.',
    GrpID: 'Does Not Apply',
    OptMenu1: 'menu2',
    DisabilityImpact:
      "'Without Vision', 'With Limited Manipulation', 'With Limited Vision', 'With Limited Language, Cognitive, and Learning Abilities'",
  },
  {
    CrtID: '1.4.4',
    Guideline: 'Level AA',
    Test: '18 Resize Text',
    TestName: '1.4.4-resize-text',
    TestID: '18.A',
    TestCondition:
      'There is a mechanism to resize, scale, or zoom in on the text to at least 200% of its original size without loss of content or functionality.',
    GrpID: '',
    OptMenu1: 'menu2',
    DisabilityImpact: "'With Limited Vision'",
  },
  {
    CrtID: '2.4.5',
    Guideline: 'Level AA',
    Test: '19 Multiple Ways',
    TestName: '2.4.5-multiple-ways',
    TestID: '19.A',
    TestCondition:
      'There are two or more ways to locate a web page within a set of web pages.',
    GrpID: '',
    OptMenu1: 'menu2',
    DisabilityImpact:
      "'Without Vision', 'With Limited Vision','With Limited Manipulation', 'With Limited Language, Cognitive, and Learning Abilities'",
  },
  {
    CrtID: '4.1.1',
    Guideline: 'Level A',
    Test: '20 Parsing',
    TestName: '4.1.1-parsing',
    TestID: '20.A',
    TestCondition: 'Not tested.',
    GrpID: '',
    OptMenu1: 'menu6',
    DisabilityImpact:
      "'Without Vision', 'With Limited Vision', 'With Limited Manipulation', 'With Limited Language, Cognitive, and Learning Abilities'",
  },
]
