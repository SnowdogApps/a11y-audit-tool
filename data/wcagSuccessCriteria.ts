export const wcagSuccessCriteria = [
  {
    ref_id: '1.1.1',
    title: 'Non-text Content',
    description:
      'All non-text content that is presented to the user has a text alternative that serves the equivalent purpose, except for the situations listed below.',
    url: 'https://www.w3.org/TR/WCAG21/#non-text-content',
    level: 'A',
    special_cases: [
      {
        type: 'exception',
        title: 'Controls, Input',
        description:
          'If non-text content is a control or accepts user input, then it has a name that describes its purpose. (Refer to Guideline 4.1 for additional requirements for controls and content that accepts user input.)',
      },
      {
        type: 'exception',
        title: 'Time-based Media',
        description:
          'If non-text content is time-based media, then text alternatives at least provide descriptive identification of the non-text content. (Refer to Guideline 1.2 for additional requirements for media.)',
      },
      {
        type: 'exception',
        title: 'Test',
        description:
          'If non-text content is a test or exercise that would be invalid if presented in text, then text alternatives at least provide descriptive identification of the non-text content.',
      },
      {
        type: 'exception',
        title: 'Sensory',
        description:
          'If non-text content is primarily intended to create a specific sensory experience, then text alternatives at least provide descriptive identification of the non-text content.',
      },
      {
        type: 'exception',
        title: 'CAPTCHA',
        description:
          'If the purpose of non-text content is to confirm that content is being accessed by a person rather than a computer, then text alternatives that identify and describe the purpose of the non-text content are provided, and alternative forms of CAPTCHA using output modes for different types of sensory perception are provided to accommodate different disabilities.',
      },
      {
        type: 'exception',
        title: 'Decoration, Formatting, Invisible',
        description:
          'If non-text content is pure decoration, is used only for visual formatting, or is not presented to users, then it is implemented in a way that it can be ignored by assistive technology.',
      },
    ],
    notes: null,
    references: [
      {
        title: 'How to Meet 1.1.1',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#non-text-content',
      },
      {
        title: 'Understanding 1.1.1',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html',
      },
    ],
  },
  {
    ref_id: '1.2.1',
    title: 'Audio-only and Video-only (Prerecorded)',
    description:
      'For prerecorded audio-only and prerecorded video-only media, the following are true, except when the audio or video is a media alternative for text and is clearly labeled as such.',
    url: 'https://www.w3.org/TR/WCAG21/#audio-only-and-video-only-prerecorded',
    level: 'A',
    special_cases: [
      {
        type: 'all_true',
        title: 'Prerecorded Audio-only',
        description:
          'An alternative for time-based media is provided that presents equivalent information for prerecorded audio-only content.',
      },
      {
        type: 'all_true',
        title: 'Prerecorded Video-only',
        description:
          'Either an alternative for time-based media or an audio track is provided that presents equivalent information for prerecorded video-only content.',
      },
    ],
    notes: null,
    references: [
      {
        title: 'How to Meet 1.2.1',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#audio-only-and-video-only-prerecorded',
      },
      {
        title: 'Understanding 1.2.1',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/audio-only-and-video-only-prerecorded.html',
      },
    ],
  },
  {
    ref_id: '1.2.2',
    title: 'Captions (Prerecorded)',
    description:
      'Captions are provided for all prerecorded audio content in synchronized media, except when the media is a media alternative for text and is clearly labeled as such.',
    url: 'https://www.w3.org/TR/WCAG21/#captions-prerecorded',
    level: 'A',
    special_cases: null,
    notes: null,
    references: [
      {
        title: 'How to Meet 1.2.2',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#captions-prerecorded',
      },
      {
        title: 'Understanding 1.2.2',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/captions-prerecorded.html',
      },
    ],
  },
  {
    ref_id: '1.2.3',
    title: 'Audio Description or Media Alternative (Prerecorded)',
    description:
      'An alternative for time-based media or audio description of the prerecorded video content is provided for synchronized media, except when the media is a media alternative for text and is clearly labeled as such.',
    url: 'https://www.w3.org/TR/WCAG21/#audio-description-or-media-alternative-prerecorded',
    level: 'A',
    special_cases: null,
    notes: null,
    references: [
      {
        title: 'How to Meet 1.2.3',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#audio-description-or-media-alternative-prerecorded',
      },
      {
        title: 'Understanding 1.2.3',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/audio-description-or-media-alternative-prerecorded.html',
      },
    ],
  },
  {
    ref_id: '1.2.4',
    title: 'Captions (Live)',
    description:
      'Captions are provided for all live audio content in synchronized media.',
    url: 'https://www.w3.org/TR/WCAG21/#captions-live',
    level: 'AA',
    special_cases: null,
    notes: null,
    references: [
      {
        title: 'How to Meet 1.2.4',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/captions-live.html',
      },
      {
        title: 'Understanding 1.2.4',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/captions-live.html',
      },
    ],
  },
  {
    ref_id: '1.2.5',
    title: 'Audio Description (Prerecorded)',
    description:
      'Audio description is provided for all prerecorded video content in synchronized media.',
    url: 'https://www.w3.org/TR/WCAG21/#audio-description-prerecorded',
    level: 'AA',
    special_cases: null,
    notes: null,
    references: [
      {
        title: 'How to Meet 1.2.5',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#audio-description-prerecorded',
      },
      {
        title: 'Understanding 1.2.5',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/audio-description-prerecorded.html',
      },
    ],
  },
  {
    ref_id: '1.2.6',
    title: 'Sign Language (Prerecorded)',
    description:
      'Sign language interpretation is provided for all prerecorded audio content in synchronized media.',
    url: 'https://www.w3.org/TR/WCAG21/#sign-language-prerecorded',
    level: 'AAA',
    special_cases: null,
    notes: null,
    references: [
      {
        title: 'How to Meet 1.2.6',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#sign-language-prerecorded',
      },
      {
        title: 'Understanding 1.2.6',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/sign-language-prerecorded.html',
      },
    ],
  },
  {
    ref_id: '1.2.7',
    title: 'Extended Audio Description (Prerecorded)',
    description:
      'Where pauses in foreground audio are insufficient to allow audio descriptions to convey the sense of the video, extended audio description is provided for all prerecorded video content in synchronized media.',
    url: 'https://www.w3.org/TR/WCAG21/#extended-audio-description-prerecorded',
    level: 'AAA',
    special_cases: null,
    notes: null,
    references: [
      {
        title: 'How to Meet 1.2.7',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#extended-audio-description-prerecorded',
      },
      {
        title: 'Understanding 1.2.7',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/extended-audio-description-prerecorded.html',
      },
    ],
  },
  {
    ref_id: '1.2.8',
    title: 'Media Alternative (Prerecorded)',
    description:
      'An alternative for time-based media is provided for all prerecorded synchronized media and for all prerecorded video-only media.',
    url: 'https://www.w3.org/TR/WCAG21/#media-alternative-prerecorded',
    level: 'AAA',
    special_cases: null,
    notes: null,
    references: [
      {
        title: 'How to Meet 1.2.8',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#media-alternative-prerecorded',
      },
      {
        title: 'Understanding 1.2.8',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/media-alternative-prerecorded.html',
      },
    ],
  },
  {
    ref_id: '1.2.9',
    title: 'Audio-only (Live)',
    description:
      ' An alternative for time-based media that presents equivalent information for live audio-only content is provided.',
    url: 'https://www.w3.org/TR/WCAG21/#audio-only-live',
    level: 'AAA',
    special_cases: null,
    notes: null,
    references: [
      {
        title: 'How to Meet 1.2.9',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#audio-only-live',
      },
      {
        title: 'Understanding 1.2.9',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/audio-only-live.html',
      },
    ],
  },
  {
    ref_id: '1.3.1',
    title: 'Info and Relationships',
    description:
      'Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text.',
    url: 'https://www.w3.org/TR/WCAG21/#info-and-relationships',
    level: 'A',
    special_cases: null,
    notes: null,
    references: [
      {
        title: 'How to Meet 1.3.1',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships',
      },
      {
        title: 'Understanding 1.3.1',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html',
      },
    ],
  },
  {
    ref_id: '1.3.2',
    title: 'Meaningful Sequence',
    description:
      'When the sequence in which content is presented affects its meaning, a correct reading sequence can be programmatically determined.',
    url: 'https://www.w3.org/TR/WCAG21/#meaningful-sequence',
    level: 'A',
    special_cases: null,
    notes: null,
    references: [
      {
        title: 'How to Meet 1.3.2',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#meaningful-sequence',
      },
      {
        title: 'Understanding 1.3.2',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html',
      },
    ],
  },
  {
    ref_id: '1.3.3',
    title: 'Sensory Characteristics',
    description:
      'Instructions provided for understanding and operating content do not rely solely on sensory characteristics of components such as shape, size, visual location, orientation, or sound.',
    url: 'https://www.w3.org/TR/WCAG21/#sensory-characteristics',
    level: 'A',
    special_cases: null,
    notes: [
      {
        content: 'For requirements related to color, refer to Guideline 1.4.',
      },
    ],
    references: [
      {
        title: 'How to Meet 1.3.3',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#sensory-characteristics',
      },
      {
        title: 'Understanding 1.3.3',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/sensory-characteristics.html',
      },
    ],
  },
  {
    ref_id: '1.3.4',
    title: 'Orientation',
    description:
      'Content does not restrict its view and operation to a single display orientation, such as portrait or landscape, unless a specific display orientation is essential.',
    url: 'https://www.w3.org/TR/WCAG21/#orientation',
    level: 'AA',
    special_cases: null,
    notes: [
      {
        content:
          'Examples where a particular display orientation may be essential are a bank check, a piano application, slides for a projector or television, or virtual reality content where binary display orientation is not applicable.',
      },
    ],
    references: [
      {
        title: 'How to Meet 1.3.4',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#orientation',
      },
      {
        title: 'Understanding 1.3.4',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/orientation.html',
      },
    ],
  },
  {
    ref_id: '1.3.5',
    title: 'Identify Input Purpose',
    description:
      'The purpose of each input field collecting information about the user can be programmatically determined when:',
    url: 'https://www.w3.org/TR/WCAG21/#identify-input-purpose',
    level: 'AA',
    special_cases: [
      {
        type: 'all_true',
        title:
          'The input field serves a purpose identified in the Input Purposes for User Interface Components section; and',
      },
      {
        type: 'all_true',
        title:
          'The content is implemented using technologies with support for identifying the expected meaning for form input data.',
      },
    ],
    notes: null,
    references: [
      {
        title: 'How to Meet 1.3.5',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#identify-input-purpose',
      },
      {
        title: 'Understanding 1.3.5',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html',
      },
    ],
  },
  {
    ref_id: '1.3.6',
    title: 'Identify Purpose',
    description:
      'In content implemented using markup languages, the purpose of User Interface Components, icons, and regions can be programmatically determined.',
    url: 'https://www.w3.org/TR/WCAG21/#identify-purpose',
    level: 'AAA',
    special_cases: null,
    notes: null,
    references: [
      {
        title: 'How to Meet 1.3.6',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#identify-purpose',
      },
      {
        title: 'Understanding 1.3.6',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/identify-purpose.html',
      },
    ],
  },
  {
    ref_id: '1.4.1',
    title: 'Use of Color',
    description:
      'Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.',
    url: 'https://www.w3.org/TR/WCAG21/#use-of-color',
    level: 'A',
    special_cases: null,
    notes: [
      {
        content:
          'This success criterion addresses color perception specifically. Other forms of perception are covered in Guideline 1.3 including programmatic access to color and other visual presentation coding.',
      },
    ],
    references: [
      {
        title: 'How to Meet 1.4.1',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#use-of-color',
      },
      {
        title: 'Understanding 1.4.1',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html',
      },
    ],
  },
  {
    ref_id: '1.4.2',
    title: 'Audio Control',
    description:
      'If any audio on a Web page plays automatically for more than 3 seconds, either a mechanism is available to pause or stop the audio, or a mechanism is available to control audio volume independently from the overall system volume level.',
    url: 'https://www.w3.org/TR/WCAG21/#audio-control',
    level: 'A',
    special_cases: null,
    notes: [
      {
        content:
          "Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content on the Web page (whether or not it is used to meet other success criteria) must meet this success criterion. See Conformance Requirement 5: Non-Interference. (https://www.w3.org/TR/WCAG21/#cc5)",
      },
    ],
    references: [
      {
        title: 'How to Meet 1.4.2',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#audio-control',
      },
      {
        title: 'Understanding 1.4.2',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/audio-control.html',
      },
    ],
  },
  {
    ref_id: '1.4.3',
    title: 'Contrast (Minimum)',
    description:
      ' The visual presentation of text and images of text has a contrast ratio of at least 4.5:1, except for the following:',
    url: 'https://www.w3.org/TR/WCAG21/#contrast-minimum',
    level: 'AA',
    special_cases: [
      {
        type: 'exception',
        title: 'Large Text',
        description:
          'Large-scale text and images of large-scale text have a contrast ratio of at least 3:1;',
      },
      {
        type: 'exception',
        title: 'Incidental',
        description:
          'Text or images of text that are part of an inactive user interface component, that are pure decoration, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement.',
      },
      {
        type: 'exception',
        title: 'Logotypes',
        description:
          'Text that is part of a logo or brand name has no minimum contrast requirement.',
      },
    ],
    notes: null,
    references: [
      {
        title: 'How to Meet 1.4.3',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#contrast-minimum',
      },
      {
        title: 'Understanding 1.4.3',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html',
      },
    ],
  },
  {
    ref_id: '1.4.4',
    title: 'Resize text',
    description:
      'Except for captions and images of text, text can be resized without assistive technology up to 200 percent without loss of content or functionality.',
    url: 'https://www.w3.org/TR/WCAG21/#resize-text',
    level: 'AA',
    special_cases: null,
    notes: null,
    references: [
      {
        title: 'How to Meet 1.4.4',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#resize-text',
      },
      {
        title: 'Understanding 1.4.4',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html',
      },
    ],
  },
  {
    ref_id: '1.4.5',
    title: 'Images of Text',
    description:
      'If the technologies being used can achieve the visual presentation, text is used to convey information rather than images of text except for the following:',
    url: 'https://www.w3.org/TR/WCAG21/#images-of-text',
    level: 'AA',
    special_cases: [
      {
        type: 'exception',
        title: 'Customizable',
        description:
          "The image of text can be visually customized to the user's requirements;",
      },
      {
        type: 'exception',
        title: 'Essential',
        description:
          'A particular presentation of text is essential to the information being conveyed.',
      },
    ],
    notes: [
      {
        content:
          'Logotypes (text that is part of a logo or brand name) are considered essential.',
      },
    ],
    references: [
      {
        title: 'How to Meet 1.4.5',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#images-of-text',
      },
      {
        title: 'Understanding 1.4.5',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/images-of-text.html',
      },
    ],
  },
  {
    ref_id: '1.4.6',
    title: 'Contrast (Enhanced)',
    description:
      'The visual presentation of text and images of text has a contrast ratio of at least 7:1, except for the following: ',
    url: 'https://www.w3.org/TR/WCAG21/#contrast-enhanced',
    level: 'AAA',
    special_cases: [
      {
        type: 'exception',
        title: 'Large Text',
        description:
          'Large-scale text and images of large-scale text have a contrast ratio of at least 4.5:1;',
      },
      {
        type: 'exception',
        title: 'Incidental',
        description:
          'Text or images of text that are part of an inactive user interface component, that are pure decoration, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement.',
      },
      {
        type: 'exception',
        title: 'Logotypes',
        description:
          'Text that is part of a logo or brand name has no minimum contrast requirement.',
      },
    ],
    notes: null,
    references: [
      {
        title: 'How to Meet 1.4.6',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#contrast-enhanced',
      },
      {
        title: 'Understanding 1.4.6',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced.html',
      },
    ],
  },
  {
    ref_id: '1.4.7',
    title: 'Low or No Background Audio',
    description:
      'For prerecorded audio-only content that (1) contains primarily speech in the foreground, (2) is not an audio CAPTCHA or audio logo, and (3) is not vocalization intended to be primarily musical expression such as singing or rapping, at least one of the following is true:',
    url: 'https://www.w3.org/TR/WCAG21/#low-or-no-background-audio',
    level: 'AAA',
    special_cases: [
      {
        type: 'at_least_one',
        title: 'No Background',
        description: 'The audio does not contain background sounds.',
      },
      {
        type: 'at_least_one',
        title: 'Turn Off',
        description: 'The background sounds can be turned off.',
      },
      {
        type: 'at_least_one',
        title: '20 dB',
        description:
          'The background sounds are at least 20 decibels lower than the foreground speech content, with the exception of occasional sounds that last for only one or two seconds.',
      },
    ],
    notes: [
      {
        content:
          "Per the definition of 'decibel,' background sound that meets this requirement will be approximately four times quieter than the foreground speech content.",
      },
    ],
    references: [
      {
        title: 'How to Meet 1.4.7',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#low-or-no-background-audio',
      },
      {
        title: 'Understanding 1.4.7',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/low-or-no-background-audio.html',
      },
    ],
  },
  {
    ref_id: '1.4.8',
    title: 'Visual Presentation',
    description:
      'For the visual presentation of blocks of text, a mechanism is available to achieve the following:',
    url: 'https://www.w3.org/TR/WCAG21/#visual-presentation',
    level: 'AAA',
    special_cases: [
      {
        type: 'all_true',
        title: 'Foreground and background colors can be selected by the user.',
      },
      {
        type: 'all_true',
        title: 'Width is no more than 80 characters or glyphs (40 if CJK).',
      },
      {
        type: 'all_true',
        title:
          'Text is not justified (aligned to both the left and the right margins).',
      },
      {
        type: 'all_true',
        title:
          'Line spacing (leading) is at least space-and-a-half within paragraphs, and paragraph spacing is at least 1.5 times larger than the line spacing.',
      },
      {
        type: 'all_true',
        title:
          'Text can be resized without assistive technology up to 200 percent in a way that does not require the user to scroll horizontally to read a line of text on a full-screen window.',
      },
    ],
    notes: null,
    references: [
      {
        title: 'How to Meet 1.4.8',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#visual-presentation',
      },
      {
        title: 'Understanding 1.4.8',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/visual-presentation.html',
      },
    ],
  },
  {
    ref_id: '1.4.9',
    title: 'Images of Text (No Exception)',
    description:
      'Images of text are only used for pure decoration or where a particular presentation of text is essential to the information being conveyed.',
    url: 'https://www.w3.org/TR/WCAG21/#images-of-text-no-exception',
    level: 'AAA',
    special_cases: null,
    notes: [
      {
        content:
          'Logotypes (text that is part of a logo or brand name) are considered essential.',
      },
    ],
    references: [
      {
        title: 'How to Meet 1.4.9',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#images-of-text-no-exception',
      },
      {
        title: 'Understanding 1.4.9',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/images-of-text-no-exception.html',
      },
    ],
  },
  {
    ref_id: '1.4.10',
    title: 'Reflow',
    description:
      'Content can be presented without loss of information or functionality, and without requiring scrolling in two dimensions for:',
    url: 'https://www.w3.org/TR/WCAG21/#reflow',
    level: 'AA',
    special_cases: [
      {
        type: 'all_true',
        title:
          'Vertical scrolling content at a width equivalent to 320 CSS pixels;',
      },
      {
        type: 'all_true',
        title:
          'Horizontal scrolling content at a height equivalent to 256 CSS pixels.',
      },
      {
        type: 'exception',
        title:
          'Except for parts of the content which require two-dimensional layout for usage or meaning.',
      },
    ],
    notes: [
      {
        content:
          'Note: 320 CSS pixels is equivalent to a starting viewport width of 1280 CSS pixels wide at 400% zoom. For web content which are designed to scroll horizontally (e.g. with vertical text), the 256 CSS pixels is equivalent to a starting viewport height of 1024px at 400% zoom.',
      },
      {
        content:
          'Examples of content which require two-dimensional layout are images, maps, diagrams, video, games, presentations, data tables, and interfaces where it is necessary to keep toolbars in view while manipulating content.',
      },
    ],
    references: [
      {
        title: 'How to Meet 1.4.10',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#reflow',
      },
      {
        title: 'Understanding 1.4.10',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/reflow.html',
      },
    ],
  },
  {
    ref_id: '1.4.11',
    title: 'Non-text Contrast',
    description:
      'The visual presentation of the following have a contrast ratio of at least 3:1 against adjacent color(s):',
    url: 'https://www.w3.org/TR/WCAG21/#non-text-contrast',
    level: 'AA',
    special_cases: [
      {
        type: 'all_true',
        title: 'User Interface Components',
        description:
          'Visual information required to identify user interface components and states, except for inactive components or where the appearance of the component is determined by the user agent and not modified by the author;',
      },
      {
        type: 'all_true',
        title: 'Graphical Objects',
        description:
          'Parts of graphics required to understand the content, except when a particular presentation of graphics is essential to the information being conveyed.',
      },
    ],
    notes: null,
    references: [
      {
        title: 'How to Meet 1.4.11',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#non-text-contrast',
      },
      {
        title: 'Understanding 1.4.11',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html',
      },
    ],
  },
  {
    ref_id: '1.4.12',
    title: 'Text Spacing',
    description:
      'In content implemented using markup languages that support the following text style properties, no loss of content or functionality occurs by setting all of the following and by changing no other style property:',
    url: 'https://www.w3.org/TR/WCAG21/#text-spacing',
    level: 'AA',
    special_cases: [
      {
        type: 'all_true',
        title:
          'Line height (line spacing) to at least 1.5 times the font size;',
      },
      {
        type: 'all_true',
        title:
          'Spacing following paragraphs to at least 2 times the font size;',
      },
      {
        type: 'all_true',
        title:
          'Letter spacing (tracking) to at least 0.12 times the font size;',
      },
      {
        type: 'all_true',
        title: 'Word spacing to at least 0.16 times the font size.',
      },
      {
        type: 'exception',
        title:
          'Exception: Human languages and scripts that do not make use of one or more of these text style properties in written text can conform using only the properties that exist for that combination of language and script.',
      },
    ],
    notes: null,
    references: [
      {
        title: 'How to Meet 1.4.12',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#text-spacing',
      },
      {
        title: 'Understanding 1.4.12',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html',
      },
    ],
  },
  {
    ref_id: '1.4.13',
    title: 'Content on Hover or Focus',
    description:
      'Where receiving and then removing pointer hover or keyboard focus triggers additional content to become visible and then hidden, the following are true:',
    url: 'https://www.w3.org/TR/WCAG21/#content-on-hover-or-focus',
    level: 'AA',
    special_cases: [
      {
        type: 'all_true',
        title: 'Dismissable',
        description:
          'A mechanism is available to dismiss the additional content without moving pointer hover or keyboard focus, unless the additional content communicates an input error or does not obscure or replace other content;',
      },
      {
        type: 'all_true',
        title: 'Hoverable',
        description:
          'If pointer hover can trigger the additional content, then the pointer can be moved over the additional content without the additional content disappearing;',
      },
      {
        type: 'all_true',
        title: 'Persistent',
        description:
          'The additional content remains visible until the hover or focus trigger is removed, the user dismisses it, or its information is no longer valid.',
      },
      {
        type: 'exception',
        title:
          'Exception: The visual presentation of the additional content is controlled by the user agent and is not modified by the author.',
      },
    ],
    notes: [
      {
        content:
          'Examples of additional content controlled by the user agent include browser tooltips created through use of the HTML title attribute.',
      },
      {
        content:
          'Custom tooltips, sub-menus, and other nonmodal popups that display on hover and focus are examples of additional content covered by this criterion.',
      },
    ],
    references: [
      {
        title: 'How to Meet 1.4.13',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#content-on-hover-or-focus',
      },
      {
        title: 'Understanding 1.4.13',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html',
      },
    ],
  },
  {
    ref_id: '2.1.1',
    title: 'Keyboard',
    description:
      "All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes, except where the underlying function requires input that depends on the path of the user's movement and not just the endpoints.",
    url: 'https://www.w3.org/TR/WCAG21/#keyboard',
    level: 'A',
    special_cases: null,
    notes: [
      {
        content:
          'This exception relates to the underlying function, not the input technique. For example, if using handwriting to enter text, the input technique (handwriting) requires path-dependent input but the underlying function (text input) does not.',
      },
      {
        content:
          'This does not forbid and should not discourage providing mouse input or other input methods in addition to keyboard operation.',
      },
    ],
    references: [
      {
        title: 'How to Meet 2.1.1',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#keyboard',
      },
      {
        title: 'Understanding 2.1.1',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html',
      },
    ],
  },
  {
    ref_id: '2.1.2',
    title: 'No Keyboard Trap',
    description:
      'If keyboard focus can be moved to a component of the page using a keyboard interface, then focus can be moved away from that component using only a keyboard interface, and, if it requires more than unmodified arrow or tab keys or other standard exit methods, the user is advised of the method for moving focus away.',
    url: 'https://www.w3.org/TR/WCAG21/#no-keyboard-trap',
    level: 'A',
    special_cases: null,
    notes: [
      {
        content:
          "Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See Conformance Requirement 5: Non-Interference. (https://www.w3.org/TR/WCAG21/#cc5)",
      },
    ],
    references: [
      {
        title: 'How to Meet 2.1.2',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#no-keyboard-trap',
      },
      {
        title: 'Understanding 2.1.2',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap.html',
      },
    ],
  },
  {
    ref_id: '2.1.3',
    title: 'Keyboard (No Exception)',
    description:
      'All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes.',
    url: 'https://www.w3.org/TR/WCAG21/#keyboard-no-exception',
    level: 'AAA',
    special_cases: null,
    notes: null,
    references: [
      {
        title: 'How to Meet 2.1.3',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#keyboard-no-exception',
      },
      {
        title: 'Understanding 2.1.3',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/keyboard-no-exception.html',
      },
    ],
  },
  {
    ref_id: '2.1.4',
    title: 'Character Key Shortcuts',
    description:
      'If a keyboard shortcut is implemented in content using only letter (including upper- and lower-case letters), punctuation, number, or symbol characters, then at least one of the following is true:',
    url: 'https://www.w3.org/TR/WCAG21/#character-key-shortcuts',
    level: 'A',
    special_cases: [
      {
        type: 'at_least_one',
        title: 'Turn off',
        description: 'A mechanism is available to turn the shortcut off;',
      },
      {
        type: 'at_least_one',
        title: 'Remap',
        description:
          'A mechanism is available to remap the shortcut to use one or more non-printable keyboard characters (e.g. Ctrl, Alt, etc);',
      },
      {
        type: 'at_least_one',
        title: 'Active only on focus',
        description:
          'The keyboard shortcut for a user interface component is only active when that component has focus.',
      },
    ],
    notes: null,
    references: [
      {
        title: 'How to Meet 2.1.4',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#character-key-shortcuts',
      },
      {
        title: 'Understanding 2.1.4',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html',
      },
    ],
  },
  {
    ref_id: '2.2.1',
    title: 'Timing Adjustable',
    description:
      'For each time limit that is set by the content, at least one of the following is true:',
    url: 'https://www.w3.org/TR/WCAG21/#timing-adjustable',
    level: 'A',
    special_cases: [
      {
        type: 'at_least_one',
        title: 'Turn off',
        description:
          'The user is allowed to turn off the time limit before encountering it; or',
      },
      {
        type: 'at_least_one',
        title: 'Adjust',
        description:
          'The user is allowed to adjust the time limit before encountering it over a wide range that is at least ten times the length of the default setting; or',
      },
      {
        type: 'at_least_one',
        title: 'Extend',
        description:
          "The user is warned before time expires and given at least 20 seconds to extend the time limit with a simple action (for example, 'press the space bar'), and the user is allowed to extend the time limit at least ten times; or",
      },
      {
        type: 'at_least_one',
        title: 'Real-time Exception',
        description:
          'The time limit is a required part of a real-time event (for example, an auction), and no alternative to the time limit is possible; or',
      },
      {
        type: 'at_least_one',
        title: 'Essential Exception',
        description:
          'The time limit is essential and extending it would invalidate the activity; or',
      },
      {
        type: 'at_least_one',
        title: '20 Hour Exception',
        description: 'The time limit is longer than 20 hours.',
      },
    ],
    notes: [
      {
        content:
          'This success criterion helps ensure that users can complete tasks without unexpected changes in content or context that are a result of a time limit. This success criterion should be considered in conjunction with Success Criterion 3.2.1 (https://www.w3.org/TR/WCAG21/#on-focus), which puts limits on changes of content or context as a result of user action.',
      },
    ],
    references: [
      {
        title: 'How to Meet 2.2.1',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#timing-adjustable',
      },
      {
        title: 'Understanding 2.2.1',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable.html',
      },
    ],
  },
  {
    ref_id: '2.2.2',
    title: 'Pause, Stop, Hide',
    description:
      'For moving, blinking, scrolling, or auto-updating information, all of the following are true:',
    url: 'https://www.w3.org/TR/WCAG21/#pause-stop-hide',
    level: 'A',
    special_cases: [
      {
        type: 'all_true',
        title: 'Moving, blinking, scrolling',
        description:
          'For any moving, blinking or scrolling information that (1) starts automatically, (2) lasts more than five seconds, and (3) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it unless the movement, blinking, or scrolling is part of an activity where it is essential; and',
      },
      {
        type: 'all_true',
        title: 'Auto-updating',
        description:
          'For any auto-updating information that (1) starts automatically and (2) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it or to control the frequency of the update unless the auto-updating is part of an activity where it is essential.',
      },
    ],
    notes: [
      {
        content:
          'For requirements related to flickering or flashing content, refer to Guideline 2.3. (https://www.w3.org/TR/WCAG21/#seizures-and-physical-reactions)',
      },
      {
        content:
          "Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See Conformance Requirement 5: Non-Interference (https://www.w3.org/TR/WCAG21/#cc5)",
      },
      {
        content:
          'Content that is updated periodically by software or that is streamed to the user agent is not required to preserve or present information that is generated or received between the initiation of the pause and resuming presentation, as this may not be technically possible, and in many situations could be misleading to do so.',
      },
      {
        content:
          'An animation that occurs as part of a preload phase or similar situation can be considered essential if interaction cannot occur during that phase for all users and if not indicating progress could confuse users or cause them to think that content was frozen or broken.',
      },
    ],
    references: [
      {
        title: 'How to Meet 2.2.2',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#pause-stop-hide',
      },
      {
        title: 'Understanding 2.2.2',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide.html',
      },
    ],
  },
  {
    ref_id: '2.2.3',
    title: 'No Timing',
    description:
      'Timing is not an essential part of the event or activity presented by the content, except for non-interactive synchronized media and real-time events.',
    url: 'https://www.w3.org/TR/WCAG21/#no-timing',
    level: 'AAA',
    special_cases: null,
    notes: null,
    references: [
      {
        title: 'How to Meet 2.2.3',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#no-timing',
      },
      {
        title: 'Understanding 2.2.3',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/no-timing.html',
      },
    ],
  },
  {
    ref_id: '2.2.4',
    title: 'Interruptions',
    description:
      'Interruptions can be postponed or suppressed by the user, except interruptions involving an emergency.',
    url: 'https://www.w3.org/TR/WCAG21/#interruptions',
    level: 'AAA',
    special_cases: null,
    notes: null,
    references: [
      {
        title: 'How to Meet 2.2.4',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#interruptions',
      },
      {
        title: 'Understanding 2.2.4',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/interruptions.html',
      },
    ],
  },
  {
    ref_id: '2.2.5',
    title: 'Re-authenticating',
    description:
      'When an authenticated session expires, the user can continue the activity without loss of data after re-authenticating.',
    url: 'https://www.w3.org/TR/WCAG21/#re-authenticating',
    level: 'AAA',
    special_cases: null,
    notes: null,
    references: [
      {
        title: 'How to Meet 2.2.5',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#re-authenticating',
      },
      {
        title: 'Understanding 2.2.5',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/re-authenticating.html',
      },
    ],
  },
  {
    ref_id: '2.2.6',
    title: 'Timeouts',
    description:
      'Users are warned of the duration of any user inactivity that could cause data loss, unless the data is preserved for more than 20 hours when the user does not take any actions.',
    url: 'https://www.w3.org/TR/WCAG21/#timeouts',
    level: 'AAA',
    special_cases: null,
    notes: [
      {
        content:
          'Privacy regulations may require explicit user consent before user identification has been authenticated and before user data is preserved. In cases where the user is a minor, explicit consent may not be solicited in most jurisdictions, countries or regions. Consultation with privacy professionals and legal counsel is advised when considering data preservation as an approach to satisfy this success criterion.',
      },
    ],
    references: [
      {
        title: 'How to Meet 2.2.6',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#timeouts',
      },
      {
        title: 'Understanding 2.2.6',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/timeouts.html',
      },
    ],
  },
  {
    ref_id: '2.3.1',
    title: 'Three Flashes or Below Threshold',
    description:
      'Web pages do not contain anything that flashes more than three times in any one second period, or the flash is below the general flash and red flash thresholds.',
    url: 'https://www.w3.org/TR/WCAG21/#three-flashes-or-below-threshold',
    level: 'A',
    special_cases: null,
    notes: [
      {
        content:
          "Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See Conformance Requirement 5: Non-Interference. (https://www.w3.org/TR/WCAG21/#cc5)",
      },
    ],
    references: [
      {
        title: 'How to Meet 2.3.1',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#three-flashes-or-below-threshold',
      },
      {
        title: 'Understanding 2.3.1',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html',
      },
    ],
  },
  {
    ref_id: '2.3.2',
    title: 'Three Flashes',
    description:
      'Web pages do not contain anything that flashes more than three times in any one second period.',
    url: 'https://www.w3.org/TR/WCAG21/#three-flashes',
    level: 'AAA',
    special_cases: null,
    notes: null,
    references: [
      {
        title: 'How to Meet 2.3.2',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#three-flashes',
      },
      {
        title: 'Understanding 2.3.2',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/three-flashes.html',
      },
    ],
  },
  {
    ref_id: '2.3.3',
    title: 'Animation from Interactions',
    description:
      'Motion animation triggered by interaction can be disabled, unless the animation is essential to the functionality or the information being conveyed.',
    url: 'https://www.w3.org/TR/WCAG21/#animation-from-interactions',
    level: 'AAA',
    special_cases: null,
    notes: null,
    references: [
      {
        title: 'How to Meet 2.3.3',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#animation-from-interactions',
      },
      {
        title: 'Understanding 2.3.3',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html',
      },
    ],
  },
  {
    ref_id: '2.4.1',
    title: 'Bypass Blocks',
    description:
      'A mechanism is available to bypass blocks of content that are repeated on multiple Web pages.',
    url: 'https://www.w3.org/TR/WCAG21/#bypass-blocks',
    level: 'A',
    special_cases: null,
    notes: null,
    references: [
      {
        title: 'How to Meet 2.4.1',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#bypass-blocks',
      },
      {
        title: 'Understanding 2.4.1',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html',
      },
    ],
  },
  {
    ref_id: '2.4.2',
    title: 'Page Titled',
    description: 'Web pages have titles that describe topic or purpose.',
    url: 'https://www.w3.org/TR/WCAG21/#page-titled',
    level: 'A',
    special_cases: null,
    notes: null,
    references: [
      {
        title: 'How to Meet 2.4.2',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#page-titled',
      },
      {
        title: 'Understanding 2.4.2',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/page-titled.html',
      },
    ],
  },
  {
    ref_id: '2.4.3',
    title: 'Focus Order',
    description:
      'If a Web page can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability.',
    url: 'https://www.w3.org/TR/WCAG21/#focus-order',
    level: 'A',
    special_cases: null,
    notes: null,
    references: [
      {
        title: 'How to Meet 2.4.3',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#focus-order',
      },
      {
        title: 'Understanding 2.4.3',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html',
      },
    ],
  },
  {
    ref_id: '2.4.4',
    title: 'Link Purpose (In Context)',
    description:
      'The purpose of each link can be determined from the link text alone or from the link text together with its programmatically determined link context, except where the purpose of the link would be ambiguous to users in general.',
    url: 'https://www.w3.org/TR/WCAG21/#link-purpose-in-context',
    level: 'A',
    special_cases: null,
    notes: null,
    references: [
      {
        title: 'How to Meet 2.4.4',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#link-purpose-in-context',
      },
      {
        title: 'Understanding 2.4.4',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html',
      },
    ],
  },
  {
    ref_id: '2.4.5',
    title: 'Multiple Ways',
    description:
      'More than one way is available to locate a Web page within a set of Web pages except where the Web Page is the result of, or a step in, a process.',
    url: 'https://www.w3.org/TR/WCAG21/#link-purpose-in-context',
    level: 'AA',
    special_cases: null,
    notes: null,
    references: [
      {
        title: 'How to Meet 2.4.5',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#multiple-ways',
      },
      {
        title: 'Understanding 2.4.5',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/multiple-ways.html',
      },
    ],
  },
  {
    ref_id: '2.4.6',
    title: 'Headings and Labels',
    description: 'Headings and labels describe topic or purpose.',
    url: 'https://www.w3.org/TR/WCAG21/#headings-and-labels',
    level: 'AA',
    special_cases: null,
    notes: null,
    references: [
      {
        title: 'How to Meet 2.4.6',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#headings-and-labels',
      },
      {
        title: 'Understanding 2.4.6',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html',
      },
    ],
  },
  {
    ref_id: '2.4.7',
    title: 'Focus Visible',
    description:
      'Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible.',
    url: 'https://www.w3.org/TR/WCAG21/#focus-visible',
    level: 'AA',
    special_cases: null,
    notes: null,
    references: [
      {
        title: 'How to Meet 2.4.7',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#focus-visible',
      },
      {
        title: 'Understanding 2.4.7',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html',
      },
    ],
  },
  {
    ref_id: '2.4.8',
    title: 'Location',
    description:
      "Information about the user's location within a set of Web pages is available.",
    url: 'https://www.w3.org/TR/WCAG21/#location',
    level: 'AAA',
    special_cases: null,
    notes: null,
    references: [
      {
        title: 'How to Meet 2.4.8',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#location',
      },
      {
        title: 'Understanding 2.4.8',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/location.html',
      },
    ],
  },
  {
    ref_id: '2.4.9',
    title: 'Link Purpose (Link Only)',
    description:
      'A mechanism is available to allow the purpose of each link to be identified from link text alone, except where the purpose of the link would be ambiguous to users in general.',
    url: 'https://www.w3.org/TR/WCAG21/#link-purpose-link-only',
    level: 'AAA',
    special_cases: null,
    notes: null,
    references: [
      {
        title: 'How to Meet 2.4.9',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#link-purpose-link-only',
      },
      {
        title: 'Understanding 2.4.9',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-link-only.html',
      },
    ],
  },
  {
    ref_id: '2.4.10',
    title: 'Section Headings',
    description: 'Section headings are used to organize the content.',
    url: 'https://www.w3.org/TR/WCAG21/#section-headings',
    level: 'AAA',
    special_cases: null,
    notes: [
      {
        content:
          "'Heading' is used in its general sense and includes titles and other ways to add a heading to different types of content.",
      },
      {
        content:
          'This success criterion covers sections within writing, not user interface components. User Interface components are covered under Success Criterion 4.1.2. (https://www.w3.org/TR/WCAG21/#name-role-value)',
      },
    ],
    references: [
      {
        title: 'How to Meet 2.4.10',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#section-headings',
      },
      {
        title: 'Understanding 2.4.10',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/section-headings.html',
      },
    ],
  },
  {
    ref_id: '2.5.1',
    title: 'Pointer Gestures',
    description:
      'All functionality that uses multipoint or path-based gestures for operation can be operated with a single pointer without a path-based gesture, unless a multipoint or path-based gesture is essential.',
    url: 'https://www.w3.org/TR/WCAG21/#pointer-gestures',
    level: 'A',
    special_cases: null,
    notes: [
      {
        content:
          'This requirement applies to web content that interprets pointer actions (i.e. this does not apply to actions that are required to operate the user agent or assistive technology).',
      },
    ],
    references: [
      {
        title: 'How to Meet 2.5.1',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#pointer-gestures',
      },
      {
        title: 'Understanding 2.5.1',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/pointer-gestures.html',
      },
    ],
  },
  {
    ref_id: '2.5.2',
    title: 'Pointer Cancellation',
    description:
      'For functionality that can be operated using a single pointer, at least one of the following is true:',
    url: 'https://www.w3.org/TR/WCAG21/#pointer-cancellation',
    level: 'A',
    special_cases: [
      {
        type: 'at_least_one',
        title: 'No Down-Event',
        description:
          'The down-event of the pointer is not used to execute any part of the function;',
      },
      {
        type: 'at_least_one',
        title: 'Abort or Undo',
        description:
          'Completion of the function is on the up-event, and a mechanism is available to abort the function before completion or to undo the function after completion;',
      },
      {
        type: 'at_least_one',
        title: 'Up Reversal',
        description:
          'The up-event reverses any outcome of the preceding down-event;',
      },
      {
        type: 'at_least_one',
        title: 'Essential',
        description: 'Completing the function on the down-event is essential.',
      },
    ],
    notes: [
      {
        content:
          'Functions that emulate a keyboard or numeric keypad key press are considered essential.',
      },
      {
        content:
          'This requirement applies to web content that interprets pointer actions (i.e. this does not apply to actions that are required to operate the user agent or assistive technology).',
      },
    ],
    references: [
      {
        title: 'How to Meet 2.5.2',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#pointer-cancellation',
      },
      {
        title: 'Understanding 2.5.2',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/pointer-cancellation.html',
      },
    ],
  },
  {
    ref_id: '2.5.3',
    title: 'Label in Name',
    description:
      'For user interface components with labels that include text or images of text, the name contains the text that is presented visually.',
    url: 'https://www.w3.org/TR/WCAG21/#label-in-name',
    level: 'A',
    special_cases: null,
    notes: [
      {
        content:
          'A best practice is to have the text of the label at the start of the name.',
      },
    ],
    references: [
      {
        title: 'How to Meet 2.5.3',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#label-in-name',
      },
      {
        title: 'Understanding 2.5.3',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html',
      },
    ],
  },
  {
    ref_id: '2.5.4',
    title: 'Motion Actuation',
    description:
      'Functionality that can be operated by device motion or user motion can also be operated by user interface components and responding to the motion can be disabled to prevent accidental actuation, except when:',
    url: 'https://www.w3.org/TR/WCAG21/#motion-actuation',
    level: 'A',
    special_cases: [
      {
        type: 'exception',
        title: 'Supported Interface',
        description:
          'The motion is used to operate functionality through an accessibility supported interface;',
      },
      {
        type: 'exception',
        title: 'Essential',
        description:
          'The motion is essential for the function and doing so would invalidate the activity.',
      },
    ],
    notes: null,
    references: [
      {
        title: 'How to Meet 2.5.4',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#motion-actuation',
      },
      {
        title: 'Understanding 2.5.4',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation.html',
      },
    ],
  },
  {
    ref_id: '2.5.5',
    title: 'Target Size',
    description:
      'The size of the target for pointer inputs is at least 44 by 44 CSS pixels except when:',
    url: 'https://www.w3.org/TR/WCAG21/#target-size',
    level: 'AAA',
    special_cases: [
      {
        type: 'exception',
        title: 'Equivalent',
        description:
          'The target is available through an equivalent link or control on the same page that is at least 44 by 44 CSS pixels;',
      },
      {
        type: 'exception',
        title: 'Inline',
        description: 'The target is in a sentence or block of text;',
      },
      {
        type: 'exception',
        title: 'User Agent Control',
        description:
          'The size of the target is determined by the user agent and is not modified by the author;',
      },
      {
        type: 'exception',
        title: 'Essential',
        description:
          'A particular presentation of the target is essential to the information being conveyed.',
      },
    ],
    notes: null,
    references: [
      {
        title: 'How to Meet 2.5.5',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#target-size',
      },
      {
        title: 'Understanding 2.5.5',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/target-size.html',
      },
    ],
  },
  {
    ref_id: '2.5.6',
    title: 'Concurrent Input Mechanisms',
    description:
      'Web content does not restrict use of input modalities available on a platform except where the restriction is essential, required to ensure the security of the content, or required to respect user settings.',
    url: 'https://www.w3.org/TR/WCAG21/#concurrent-input-mechanisms',
    level: 'AAA',
    special_cases: null,
    notes: null,
    references: [
      {
        title: 'How to Meet 2.5.6',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#concurrent-input-mechanisms',
      },
      {
        title: 'Understanding 2.5.6',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/concurrent-input-mechanisms.html',
      },
    ],
  },
  {
    ref_id: '3.1.1',
    title: 'Language of Page',
    description:
      'The default human language of each Web page can be programmatically determined.',
    url: 'https://www.w3.org/TR/WCAG21/#language-of-page',
    level: 'A',
    special_cases: null,
    notes: null,
    references: [
      {
        title: 'How to Meet 3.1.1',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#language-of-page',
      },
      {
        title: 'Understanding 3.1.1',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/language-of-page.html',
      },
    ],
  },
  {
    ref_id: '3.1.2',
    title: 'Language of Parts',
    description:
      'The human language of each passage or phrase in the content can be programmatically determined except for proper names, technical terms, words of indeterminate language, and words or phrases that have become part of the vernacular of the immediately surrounding text.',
    url: 'https://www.w3.org/TR/WCAG21/#language-of-parts',
    level: 'AA',
    special_cases: null,
    notes: null,
    references: [
      {
        title: 'How to Meet 3.1.2',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#language-of-parts',
      },
      {
        title: 'Understanding 3.1.2',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/language-of-parts.html',
      },
    ],
  },
  {
    ref_id: '3.1.3',
    title: 'Unusual Words',
    description:
      'A mechanism is available for identifying specific definitions of words or phrases used in an unusual or restricted way, including idioms and jargon.',
    url: 'https://www.w3.org/TR/WCAG21/#unusual-words',
    level: 'AAA',
    special_cases: null,
    notes: null,
    references: [
      {
        title: 'How to Meet 3.1.3',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#unusual-words',
      },
      {
        title: 'Understanding 3.1.3',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/unusual-words.html',
      },
    ],
  },
  {
    ref_id: '3.1.4',
    title: 'Abbreviations',
    description:
      'A mechanism for identifying the expanded form or meaning of abbreviations is available.',
    url: 'https://www.w3.org/TR/WCAG21/#abbreviations',
    level: 'AAA',
    special_cases: null,
    notes: null,
    references: [
      {
        title: 'How to Meet 3.1.4',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#abbreviations',
      },
      {
        title: 'Understanding 3.1.4',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/abbreviations.html',
      },
    ],
  },
  {
    ref_id: '3.1.5',
    title: 'Reading Level',
    description:
      'When text requires reading ability more advanced than the lower secondary education level after removal of proper names and titles, supplemental content, or a version that does not require reading ability more advanced than the lower secondary education level, is available.',
    url: 'https://www.w3.org/TR/WCAG21/#reading-level',
    level: 'AAA',
    special_cases: null,
    notes: null,
    references: [
      {
        title: 'How to Meet 3.1.5',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#reading-level',
      },
      {
        title: 'Understanding 3.1.5',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/reading-level.html',
      },
    ],
  },
  {
    ref_id: '3.1.6',
    title: 'Pronunciation',
    description:
      'A mechanism is available for identifying specific pronunciation of words where meaning of the words, in context, is ambiguous without knowing the pronunciation.',
    url: 'https://www.w3.org/TR/WCAG21/#pronunciation',
    level: 'AAA',
    special_cases: null,
    notes: null,
    references: [
      {
        title: 'How to Meet 3.1.6',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#pronunciation',
      },
      {
        title: 'Understanding 3.1.6',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/pronunciation.html',
      },
    ],
  },
  {
    ref_id: '3.2.1',
    title: 'On Focus',
    description:
      'When any component receives focus, it does not initiate a change of context.',
    url: 'https://www.w3.org/TR/WCAG21/#on-focus',
    level: 'A',
    special_cases: null,
    notes: null,
    references: [
      {
        title: 'How to Meet 3.2.1',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#on-focus',
      },
      {
        title: 'Understanding 3.2.1',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/on-focus.html',
      },
    ],
  },
  {
    ref_id: '3.2.2',
    title: 'On Input',
    description:
      'Changing the setting of any user interface component does not automatically cause a change of context unless the user has been advised of the behavior before using the component.',
    url: 'https://www.w3.org/TR/WCAG21/#on-input',
    level: 'A',
    special_cases: null,
    notes: null,
    references: [
      {
        title: 'How to Meet 3.2.2',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#on-input',
      },
      {
        title: 'Understanding 3.2.2',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/on-input.html',
      },
    ],
  },
  {
    ref_id: '3.2.3',
    title: 'Consistent Navigation',
    description:
      'Navigational mechanisms that are repeated on multiple Web pages within a set of Web pages occur in the same relative order each time they are repeated, unless a change is initiated by the user.',
    url: 'https://www.w3.org/TR/WCAG21/#consistent-navigation',
    level: 'AA',
    special_cases: null,
    notes: null,
    references: [
      {
        title: 'How to Meet 3.2.3',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#consistent-navigation',
      },
      {
        title: 'Understanding 3.2.3',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/consistent-navigation.html',
      },
    ],
  },
  {
    ref_id: '3.2.4',
    title: 'Consistent Identification',
    description:
      'Components that have the same functionality within a set of Web pages are identified consistently.',
    url: 'https://www.w3.org/TR/WCAG21/#consistent-identification',
    level: 'AA',
    special_cases: null,
    notes: null,
    references: [
      {
        title: 'How to Meet 3.2.4',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#consistent-identification',
      },
      {
        title: 'Understanding 3.2.4',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/consistent-identification.html',
      },
    ],
  },
  {
    ref_id: '3.2.5',
    title: 'Change on Request',
    description:
      'Changes of context are initiated only by user request or a mechanism is available to turn off such changes.',
    url: 'https://www.w3.org/TR/WCAG21/#change-on-request',
    level: 'AAA',
    special_cases: null,
    notes: null,
    references: [
      {
        title: 'How to Meet 3.2.5',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#change-on-request',
      },
      {
        title: 'Understanding 3.2.5',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/change-on-request.html',
      },
    ],
  },
  {
    ref_id: '3.3.1',
    title: 'Error Identification',
    description:
      'If an input error is automatically detected, the item that is in error is identified and the error is described to the user in text.',
    url: 'https://www.w3.org/TR/WCAG21/#error-identification',
    level: 'A',
    special_cases: null,
    notes: null,
    references: [
      {
        title: 'How to Meet 3.3.1',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#error-identification',
      },
      {
        title: 'Understanding 3.3.1',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/error-identification.html',
      },
    ],
  },
  {
    ref_id: '3.3.2',
    title: 'Labels or Instructions',
    description:
      'Labels or instructions are provided when content requires user input.',
    url: 'https://www.w3.org/TR/WCAG21/#labels-or-instructions',
    level: 'A',
    special_cases: null,
    notes: null,
    references: [
      {
        title: 'How to Meet 3.3.2',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#labels-or-instructions',
      },
      {
        title: 'Understanding 3.3.2',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html',
      },
    ],
  },
  {
    ref_id: '3.3.3',
    title: 'Error Suggestion',
    description:
      'If an input error is automatically detected and suggestions for correction are known, then the suggestions are provided to the user, unless it would jeopardize the security or purpose of the content.',
    url: 'https://www.w3.org/TR/WCAG21/#error-suggestion',
    level: 'AA',
    special_cases: null,
    notes: null,
    references: [
      {
        title: 'How to Meet 3.3.3',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#error-suggestion',
      },
      {
        title: 'Understanding 3.3.3',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/error-suggestion.html',
      },
    ],
  },
  {
    ref_id: '3.3.4',
    title: 'Error Prevention (Legal, Financial, Data)',
    description:
      ' For Web pages that cause legal commitments or financial transactions for the user to occur, that modify or delete user-controllable data in data storage systems, or that submit user test responses, at least one of the following is true:',
    url: 'https://www.w3.org/TR/WCAG21/#error-prevention-legal-financial-data',
    level: 'AA',
    special_cases: [
      {
        type: 'at_least_one',
        title: 'Reversible',
        description: 'Submissions are reversible.',
      },
      {
        type: 'at_least_one',
        title: 'Checked',
        description:
          'Data entered by the user is checked for input errors and the user is provided an opportunity to correct them.',
      },
      {
        type: 'at_least_one',
        title: 'Confirmed',
        description:
          'A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.',
      },
    ],
    notes: null,
    references: [
      {
        title: 'How to Meet 3.3.4',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#error-prevention-legal-financial-data',
      },
      {
        title: 'Understanding 3.3.4',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/error-prevention-legal-financial-data.html',
      },
    ],
  },
  {
    ref_id: '3.3.5',
    title: 'Help',
    description: 'Context-sensitive help is available.',
    url: 'https://www.w3.org/TR/WCAG21/#help',
    level: 'AAA',
    special_cases: null,
    notes: null,
    references: [
      {
        title: 'How to Meet 3.3.5',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#help',
      },
      {
        title: 'Understanding 3.3.5',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/help.html',
      },
    ],
  },
  {
    ref_id: '3.3.6',
    title: 'Error Prevention (All)',
    description:
      'For Web pages that require the user to submit information, at least one of the following is true:',
    url: 'https://www.w3.org/TR/WCAG21/#error-prevention-all',
    level: 'AAA',
    special_cases: [
      {
        type: 'at_least_one',
        title: 'Reversible',
        description: 'Submissions are reversible.',
      },
      {
        type: 'at_least_one',
        title: 'Checked',
        description:
          'Data entered by the user is checked for input errors and the user is provided an opportunity to correct them.',
      },
      {
        type: 'at_least_one',
        title: 'Confirmed',
        description:
          'A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.',
      },
    ],
    notes: null,
    references: [
      {
        title: 'How to Meet 3.3.6',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#error-prevention-all',
      },
      {
        title: 'Understanding 3.3.6',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/error-prevention-all.html',
      },
    ],
  },
  {
    ref_id: '4.1.1',
    title: 'Parsing',
    description:
      'In content implemented using markup languages, elements have complete start and end tags, elements are nested according to their specifications, elements do not contain duplicate attributes, and any IDs are unique, except where the specifications allow these features.',
    url: 'https://www.w3.org/TR/WCAG21/#parsing',
    level: 'A',
    special_cases: null,
    notes: [
      {
        content:
          'Start and end tags that are missing a critical character in their formation, such as a closing angle bracket or a mismatched attribute value quotation mark are not complete.',
      },
    ],
    references: [
      {
        title: 'How to Meet 4.1.1',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#parsing',
      },
      {
        title: 'Understanding 4.1.1',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/parsing.html',
      },
    ],
  },
  {
    ref_id: '4.1.2',
    title: 'Name, Role, Value',
    description:
      'For all user interface components (including but not limited to: form elements, links and components generated by scripts), the name and role can be programmatically determined; states, properties, and values that can be set by the user can be programmatically set; and notification of changes to these items is available to user agents, including assistive technologies.',
    url: 'https://www.w3.org/TR/WCAG21/#name-role-value',
    level: 'A',
    special_cases: null,
    notes: [
      {
        content:
          'This success criterion is primarily for Web authors who develop or script their own user interface components. For example, standard HTML controls already meet this success criterion when used according to specification.',
      },
    ],
    references: [
      {
        title: 'How to Meet 4.1.2',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#name-role-value',
      },
      {
        title: 'Understanding 4.1.2',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html',
      },
    ],
  },
  {
    ref_id: '4.1.3',
    title: 'Status Messages',
    description:
      'In content implemented using markup languages, status messages can be programmatically determined through role or properties such that they can be presented to the user by assistive technologies without receiving focus.',
    url: 'https://www.w3.org/TR/WCAG21/#status-messages',
    level: 'AA',
    special_cases: null,
    notes: null,
    references: [
      {
        title: 'How to Meet 4.1.3',
        url: 'https://www.w3.org/WAI/WCAG21/quickref/#status-messages',
      },
      {
        title: 'Understanding 4.1.3',
        url: 'https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html',
      },
    ],
  },
]
