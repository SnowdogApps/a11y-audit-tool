export const axeResults = [
  {
    id: 'accesskeys',
    impact: null,
    tags: ['cat.keyboard', 'best-practice'],
    description: 'Ensures every accesskey attribute value is unique',
    help: 'accesskey attribute value should be unique',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/accesskeys?application=axe-puppeteer',
    nodes: [],
  },
  {
    id: 'area-alt',
    impact: null,
    tags: [
      'cat.text-alternatives',
      'wcag2a',
      'wcag244',
      'wcag412',
      'section508',
      'section508.22.a',
      'ACT',
      'TTv5',
      'TT6.a',
    ],
    description: 'Ensures <area> elements of image maps have alternate text',
    help: 'Active <area> elements must have alternate text',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/area-alt?application=axe-puppeteer',
    nodes: [],
  },
  {
    id: 'aria-allowed-role',
    impact: null,
    tags: ['cat.aria', 'best-practice'],
    description:
      'Ensures role attribute has an appropriate value for the element',
    help: 'ARIA role should be appropriate for the element',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/aria-allowed-role?application=axe-puppeteer',
    nodes: [],
  },
  {
    id: 'aria-command-name',
    impact: null,
    tags: ['cat.aria', 'wcag2a', 'wcag412', 'ACT', 'TTv5', 'TT6.a'],
    description:
      'Ensures every ARIA button, link and menuitem has an accessible name',
    help: 'ARIA commands must have an accessible name',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/aria-command-name?application=axe-puppeteer',
    nodes: [],
  },
  {
    id: 'aria-dialog-name',
    impact: null,
    tags: ['cat.aria', 'best-practice'],
    description:
      'Ensures every ARIA dialog and alertdialog node has an accessible name',
    help: 'ARIA dialog and alertdialog nodes should have an accessible name',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/aria-dialog-name?application=axe-puppeteer',
    nodes: [],
  },
  {
    id: 'aria-input-field-name',
    impact: null,
    tags: ['cat.aria', 'wcag2a', 'wcag412', 'ACT', 'TTv5', 'TT5.c'],
    description: 'Ensures every ARIA input field has an accessible name',
    help: 'ARIA input fields must have an accessible name',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/aria-input-field-name?application=axe-puppeteer',
    nodes: [],
  },
  {
    id: 'aria-meter-name',
    impact: null,
    tags: ['cat.aria', 'wcag2a', 'wcag111'],
    description: 'Ensures every ARIA meter node has an accessible name',
    help: 'ARIA meter nodes must have an accessible name',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/aria-meter-name?application=axe-puppeteer',
    nodes: [],
  },
  {
    id: 'aria-progressbar-name',
    impact: null,
    tags: ['cat.aria', 'wcag2a', 'wcag111'],
    description: 'Ensures every ARIA progressbar node has an accessible name',
    help: 'ARIA progressbar nodes must have an accessible name',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/aria-progressbar-name?application=axe-puppeteer',
    nodes: [],
  },
  {
    id: 'aria-required-attr',
    impact: null,
    tags: ['cat.aria', 'wcag2a', 'wcag412'],
    description:
      'Ensures elements with ARIA roles have all required ARIA attributes',
    help: 'Required ARIA attributes must be provided',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/aria-required-attr?application=axe-puppeteer',
    nodes: [],
  },
  {
    id: 'aria-required-children',
    impact: null,
    tags: ['cat.aria', 'wcag2a', 'wcag131'],
    description:
      'Ensures elements with an ARIA role that require child roles contain them',
    help: 'Certain ARIA roles must contain particular children',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/aria-required-children?application=axe-puppeteer',
    nodes: [],
  },
  {
    id: 'aria-required-parent',
    impact: null,
    tags: ['cat.aria', 'wcag2a', 'wcag131'],
    description:
      'Ensures elements with an ARIA role that require parent roles are contained by them',
    help: 'Certain ARIA roles must be contained by particular parents',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/aria-required-parent?application=axe-puppeteer',
    nodes: [],
  },
  {
    id: 'aria-roles',
    impact: null,
    tags: ['cat.aria', 'wcag2a', 'wcag412'],
    description: 'Ensures all elements with a role attribute use a valid value',
    help: 'ARIA roles used must conform to valid values',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/aria-roles?application=axe-puppeteer',
    nodes: [],
  },
  {
    id: 'aria-text',
    impact: null,
    tags: ['cat.aria', 'best-practice'],
    description:
      'Ensures "role=text" is used on elements with no focusable descendants',
    help: '"role=text" should have no focusable descendants',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/aria-text?application=axe-puppeteer',
    nodes: [],
  },
  {
    id: 'aria-toggle-field-name',
    impact: null,
    tags: ['cat.aria', 'wcag2a', 'wcag412', 'ACT', 'TTv5', 'TT5.c'],
    description: 'Ensures every ARIA toggle field has an accessible name',
    help: 'ARIA toggle fields must have an accessible name',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/aria-toggle-field-name?application=axe-puppeteer',
    nodes: [],
  },
  {
    id: 'aria-tooltip-name',
    impact: null,
    tags: ['cat.aria', 'wcag2a', 'wcag412'],
    description: 'Ensures every ARIA tooltip node has an accessible name',
    help: 'ARIA tooltip nodes must have an accessible name',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/aria-tooltip-name?application=axe-puppeteer',
    nodes: [],
  },
  {
    id: 'aria-treeitem-name',
    impact: null,
    tags: ['cat.aria', 'best-practice'],
    description: 'Ensures every ARIA treeitem node has an accessible name',
    help: 'ARIA treeitem nodes should have an accessible name',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/aria-treeitem-name?application=axe-puppeteer',
    nodes: [],
  },
  {
    id: 'autocomplete-valid',
    impact: null,
    tags: ['cat.forms', 'wcag21aa', 'wcag135', 'ACT'],
    description:
      'Ensure the autocomplete attribute is correct and suitable for the form field',
    help: 'autocomplete attribute must be used correctly',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/autocomplete-valid?application=axe-puppeteer',
    nodes: [],
  },
  {
    id: 'avoid-inline-spacing',
    impact: null,
    tags: ['cat.structure', 'wcag21aa', 'wcag1412', 'ACT'],
    description:
      'Ensure that text spacing set through style attributes can be adjusted with custom stylesheets',
    help: 'Inline text spacing must be adjustable with custom stylesheets',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/avoid-inline-spacing?application=axe-puppeteer',
    nodes: [],
  },
  {
    id: 'blink',
    impact: null,
    tags: [
      'cat.time-and-media',
      'wcag2a',
      'wcag222',
      'section508',
      'section508.22.j',
      'TTv5',
      'TT2.b',
    ],
    description: 'Ensures <blink> elements are not used',
    help: '<blink> elements are deprecated and must not be used',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/blink?application=axe-puppeteer',
    nodes: [],
  },
  {
    id: 'definition-list',
    impact: null,
    tags: ['cat.structure', 'wcag2a', 'wcag131'],
    description: 'Ensures <dl> elements are structured correctly',
    help: '<dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/definition-list?application=axe-puppeteer',
    nodes: [],
  },
  {
    id: 'dlitem',
    impact: null,
    tags: ['cat.structure', 'wcag2a', 'wcag131'],
    description: 'Ensures <dt> and <dd> elements are contained by a <dl>',
    help: '<dt> and <dd> elements must be contained by a <dl>',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/dlitem?application=axe-puppeteer',
    nodes: [],
  },
  {
    id: 'duplicate-id-active',
    impact: null,
    tags: ['cat.parsing', 'wcag2a', 'wcag411'],
    description:
      'Ensures every id attribute value of active elements is unique',
    help: 'IDs of active elements must be unique',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/duplicate-id-active?application=axe-puppeteer',
    nodes: [],
  },
  {
    id: 'duplicate-id-aria',
    impact: null,
    tags: ['cat.parsing', 'wcag2a', 'wcag411'],
    description:
      'Ensures every id attribute value used in ARIA and in labels is unique',
    help: 'IDs used in ARIA and labels must be unique',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/duplicate-id-aria?application=axe-puppeteer',
    nodes: [],
  },
  {
    id: 'empty-table-header',
    impact: null,
    tags: ['cat.name-role-value', 'best-practice'],
    description: 'Ensures table headers have discernible text',
    help: 'Table header text should not be empty',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/empty-table-header?application=axe-puppeteer',
    nodes: [],
  },
  {
    id: 'form-field-multiple-labels',
    impact: null,
    tags: ['cat.forms', 'wcag2a', 'wcag332', 'TTv5', 'TT5.c'],
    description: 'Ensures form field does not have multiple label elements',
    help: 'Form field must not have multiple label elements',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/form-field-multiple-labels?application=axe-puppeteer',
    nodes: [],
  },
  {
    id: 'frame-focusable-content',
    impact: null,
    tags: ['cat.keyboard', 'wcag2a', 'wcag211', 'TTv5', 'TT4.a'],
    description:
      'Ensures <frame> and <iframe> elements with focusable content do not have tabindex=-1',
    help: 'Frames with focusable content must not have tabindex=-1',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/frame-focusable-content?application=axe-puppeteer',
    nodes: [],
  },
  {
    id: 'frame-tested',
    impact: null,
    tags: ['cat.structure', 'review-item', 'best-practice'],
    description:
      'Ensures <iframe> and <frame> elements contain the axe-core script',
    help: 'Frames should be tested with axe-core',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/frame-tested?application=axe-puppeteer',
    nodes: [],
  },
  {
    id: 'frame-title-unique',
    impact: null,
    tags: ['cat.text-alternatives', 'wcag412', 'wcag2a', 'TTv5', 'TT12.d'],
    description:
      'Ensures <iframe> and <frame> elements contain a unique title attribute',
    help: 'Frames must have a unique title attribute',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/frame-title-unique?application=axe-puppeteer',
    nodes: [],
  },
  {
    id: 'frame-title',
    impact: null,
    tags: [
      'cat.text-alternatives',
      'wcag2a',
      'wcag412',
      'section508',
      'section508.22.i',
      'TTv5',
      'TT12.d',
    ],
    description:
      'Ensures <iframe> and <frame> elements have an accessible name',
    help: 'Frames must have an accessible name',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/frame-title?application=axe-puppeteer',
    nodes: [],
  },
  {
    id: 'html-xml-lang-mismatch',
    impact: null,
    tags: ['cat.language', 'wcag2a', 'wcag311', 'ACT'],
    description:
      'Ensure that HTML elements with both valid lang and xml:lang attributes agree on the base language of the page',
    help: 'HTML elements with lang and xml:lang must have the same base language',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/html-xml-lang-mismatch?application=axe-puppeteer',
    nodes: [],
  },
  {
    id: 'input-button-name',
    impact: null,
    tags: [
      'cat.name-role-value',
      'wcag2a',
      'wcag412',
      'section508',
      'section508.22.a',
      'ACT',
      'TTv5',
      'TT5.c',
    ],
    description: 'Ensures input buttons have discernible text',
    help: 'Input buttons must have discernible text',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/input-button-name?application=axe-puppeteer',
    nodes: [],
  },
  {
    id: 'input-image-alt',
    impact: null,
    tags: [
      'cat.text-alternatives',
      'wcag2a',
      'wcag111',
      'wcag412',
      'section508',
      'section508.22.a',
      'ACT',
      'TTv5',
      'TT7.a',
    ],
    description: 'Ensures <input type="image"> elements have alternate text',
    help: 'Image buttons must have alternate text',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/input-image-alt?application=axe-puppeteer',
    nodes: [],
  },
  {
    id: 'label-title-only',
    impact: null,
    tags: ['cat.forms', 'best-practice'],
    description:
      'Ensures that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes',
    help: 'Form elements should have a visible label',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/label-title-only?application=axe-puppeteer',
    nodes: [],
  },
  {
    id: 'label',
    impact: null,
    tags: [
      'cat.forms',
      'wcag2a',
      'wcag412',
      'section508',
      'section508.22.n',
      'ACT',
      'TTv5',
      'TT5.c',
    ],
    description: 'Ensures every form element has a label',
    help: 'Form elements must have labels',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/label?application=axe-puppeteer',
    nodes: [],
  },
  {
    id: 'landmark-complementary-is-top-level',
    impact: null,
    tags: ['cat.semantics', 'best-practice'],
    description: 'Ensures the complementary landmark or aside is at top level',
    help: 'Aside should not be contained in another landmark',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/landmark-complementary-is-top-level?application=axe-puppeteer',
    nodes: [],
  },
  {
    id: 'marquee',
    impact: null,
    tags: ['cat.parsing', 'wcag2a', 'wcag222', 'TTv5', 'TT2.b'],
    description: 'Ensures <marquee> elements are not used',
    help: '<marquee> elements are deprecated and must not be used',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/marquee?application=axe-puppeteer',
    nodes: [],
  },
  {
    id: 'meta-refresh',
    impact: null,
    tags: ['cat.time-and-media', 'wcag2a', 'wcag221', 'TTv5', 'TT8.a'],
    description:
      'Ensures <meta http-equiv="refresh"> is not used for delayed refresh',
    help: 'Delayed refresh under 20 hours must not be used',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/meta-refresh?application=axe-puppeteer',
    nodes: [],
  },
  {
    id: 'object-alt',
    impact: null,
    tags: [
      'cat.text-alternatives',
      'wcag2a',
      'wcag111',
      'section508',
      'section508.22.a',
    ],
    description: 'Ensures <object> elements have alternate text',
    help: '<object> elements must have alternate text',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/object-alt?application=axe-puppeteer',
    nodes: [],
  },
  {
    id: 'presentation-role-conflict',
    impact: null,
    tags: ['cat.aria', 'best-practice', 'ACT'],
    description:
      'Elements marked as presentational should not have global ARIA or tabindex to ensure all screen readers ignore them',
    help: 'Ensure elements marked as presentational are consistently ignored',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/presentation-role-conflict?application=axe-puppeteer',
    nodes: [],
  },
  {
    id: 'role-img-alt',
    impact: null,
    tags: [
      'cat.text-alternatives',
      'wcag2a',
      'wcag111',
      'section508',
      'section508.22.a',
      'ACT',
      'TTv5',
      'TT7.a',
    ],
    description: "Ensures [role='img'] elements have alternate text",
    help: "[role='img'] elements must have an alternative text",
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/role-img-alt?application=axe-puppeteer',
    nodes: [],
  },
  {
    id: 'scope-attr-valid',
    impact: null,
    tags: ['cat.tables', 'best-practice'],
    description: 'Ensures the scope attribute is used correctly on tables',
    help: 'scope attribute should be used correctly',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/scope-attr-valid?application=axe-puppeteer',
    nodes: [],
  },
  {
    id: 'scrollable-region-focusable',
    impact: null,
    tags: ['cat.keyboard', 'wcag2a', 'wcag211', 'TTv5', 'TT4.a'],
    description:
      'Ensure elements that have scrollable content are accessible by keyboard',
    help: 'Scrollable region must have keyboard access',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/scrollable-region-focusable?application=axe-puppeteer',
    nodes: [],
  },
  {
    id: 'select-name',
    impact: null,
    tags: [
      'cat.forms',
      'wcag2a',
      'wcag412',
      'section508',
      'section508.22.n',
      'ACT',
      'TTv5',
      'TT5.c',
    ],
    description: 'Ensures select element has an accessible name',
    help: 'Select element must have an accessible name',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/select-name?application=axe-puppeteer',
    nodes: [],
  },
  {
    id: 'server-side-image-map',
    impact: null,
    tags: [
      'cat.text-alternatives',
      'wcag2a',
      'wcag211',
      'section508',
      'section508.22.f',
      'TTv5',
      'TT4.a',
    ],
    description: 'Ensures that server-side image maps are not used',
    help: 'Server-side image maps must not be used',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/server-side-image-map?application=axe-puppeteer',
    nodes: [],
  },
  {
    id: 'skip-link',
    impact: null,
    tags: ['cat.keyboard', 'best-practice'],
    description: 'Ensure all skip links have a focusable target',
    help: 'The skip-link target should exist and be focusable',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/skip-link?application=axe-puppeteer',
    nodes: [],
  },
  {
    id: 'svg-img-alt',
    impact: null,
    tags: [
      'cat.text-alternatives',
      'wcag2a',
      'wcag111',
      'section508',
      'section508.22.a',
      'ACT',
      'TTv5',
      'TT7.a',
    ],
    description:
      'Ensures <svg> elements with an img, graphics-document or graphics-symbol role have an accessible text',
    help: '<svg> elements with an img role must have an alternative text',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/svg-img-alt?application=axe-puppeteer',
    nodes: [],
  },
  {
    id: 'table-duplicate-name',
    impact: null,
    tags: ['cat.tables', 'best-practice'],
    description:
      'Ensure the <caption> element does not contain the same text as the summary attribute',
    help: 'tables should not have the same summary and caption',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/table-duplicate-name?application=axe-puppeteer',
    nodes: [],
  },
  {
    id: 'td-headers-attr',
    impact: null,
    tags: [
      'cat.tables',
      'wcag2a',
      'wcag131',
      'section508',
      'section508.22.g',
      'TTv5',
      'TT14.b',
    ],
    description:
      'Ensure that each cell in a table that uses the headers attribute refers only to other cells in that table',
    help: 'Table cells that use the headers attribute must only refer to cells in the same table',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/td-headers-attr?application=axe-puppeteer',
    nodes: [],
  },
  {
    id: 'th-has-data-cells',
    impact: null,
    tags: [
      'cat.tables',
      'wcag2a',
      'wcag131',
      'section508',
      'section508.22.g',
      'TTv5',
      '14.b',
    ],
    description:
      'Ensure that <th> elements and elements with role=columnheader/rowheader have data cells they describe',
    help: 'Table headers in a data table must refer to data cells',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/th-has-data-cells?application=axe-puppeteer',
    nodes: [],
  },
  {
    id: 'valid-lang',
    impact: null,
    tags: ['cat.language', 'wcag2aa', 'wcag312', 'ACT', 'TTv5', 'TT11.b'],
    description: 'Ensures lang attributes have valid values',
    help: 'lang attribute must have a valid value',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/valid-lang?application=axe-puppeteer',
    nodes: [],
  },
  {
    id: 'video-caption',
    impact: null,
    tags: [
      'cat.text-alternatives',
      'wcag2a',
      'wcag122',
      'section508',
      'section508.22.a',
      'TTv5',
      'TT17.a',
    ],
    description: 'Ensures <video> elements have captions',
    help: '<video> elements must have captions',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/video-caption?application=axe-puppeteer',
    nodes: [],
  },
  {
    id: 'no-autoplay-audio',
    impact: null,
    tags: ['cat.time-and-media', 'wcag2a', 'wcag142', 'ACT', 'TTv5', 'TT2.a'],
    description:
      'Ensures <video> or <audio> elements do not autoplay audio for more than 3 seconds without a control mechanism to stop or mute the audio',
    help: '<video> or <audio> elements must not play automatically',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/no-autoplay-audio?application=axe-puppeteer',
    nodes: [],
  },
  {
    id: 'aria-allowed-attr',
    impact: null,
    tags: ['cat.aria', 'wcag2a', 'wcag412'],
    description: "Ensures ARIA attributes are allowed for an element's role",
    help: 'Elements must only use allowed ARIA attributes',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/aria-allowed-attr?application=axe-puppeteer',
    nodes: [
      {
        any: [],
        all: [
          {
            id: 'aria-allowed-attr',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message: 'ARIA attributes are used correctly for the defined role',
          },
          {
            id: 'aria-conditional-attr',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'ARIA attribute is allowed',
          },
        ],
        none: [
          {
            id: 'aria-unsupported-attr',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message: 'ARIA attribute is supported',
          },
          {
            id: 'aria-prohibited-attr',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'ARIA attribute is allowed',
          },
        ],
        impact: null,
        html: '<section data-v-f9cdd344="" data-v-ebb4d8dc="" aria-label="Cookie privacy" class="info-bar info-bar__cookies">',
        target: ['.info-bar'],
      },
      {
        any: [],
        all: [
          {
            id: 'aria-allowed-attr',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message: 'ARIA attributes are used correctly for the defined role',
          },
          {
            id: 'aria-conditional-attr',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'ARIA attribute is allowed',
          },
        ],
        none: [
          {
            id: 'aria-unsupported-attr',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message: 'ARIA attribute is supported',
          },
          {
            id: 'aria-prohibited-attr',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'ARIA attribute is allowed',
          },
        ],
        impact: null,
        html: '<button type="button" aria-label="Skip navigation" class="button scroll__button scroll__button--visually-hidden null" data-v-d354ce36="">\n      Skip navigation\n    </button>',
        target: ['.scroll__button--visually-hidden'],
      },
      {
        any: [],
        all: [
          {
            id: 'aria-allowed-attr',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message: 'ARIA attributes are used correctly for the defined role',
          },
          {
            id: 'aria-conditional-attr',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'ARIA attribute is allowed',
          },
        ],
        none: [
          {
            id: 'aria-unsupported-attr',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message: 'ARIA attribute is supported',
          },
          {
            id: 'aria-prohibited-attr',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'ARIA attribute is allowed',
          },
        ],
        impact: null,
        html: '<a href="/" aria-current="page" aria-label="Snowdog Homepage" class="nuxt-link-exact-active nuxt-link-active logo link--no-decoration" data-v-764a8d53="">',
        target: ['.nuxt-link-exact-active'],
      },
      {
        any: [],
        all: [
          {
            id: 'aria-allowed-attr',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message: 'ARIA attributes are used correctly for the defined role',
          },
          {
            id: 'aria-conditional-attr',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'ARIA attribute is allowed',
          },
        ],
        none: [
          {
            id: 'aria-unsupported-attr',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message: 'ARIA attribute is supported',
          },
          {
            id: 'aria-prohibited-attr',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'ARIA attribute is allowed',
          },
        ],
        impact: null,
        html: '<button type="button" aria-haspopup="true" aria-expanded="false" class="navigation__item navigation__link navigation__button">',
        target: [
          '.navigation__item:nth-child(2) > .navigation__button[aria-haspopup="true"][type="button"]',
        ],
      },
      {
        any: [],
        all: [
          {
            id: 'aria-allowed-attr',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message: 'ARIA attributes are used correctly for the defined role',
          },
          {
            id: 'aria-conditional-attr',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'ARIA attribute is allowed',
          },
        ],
        none: [
          {
            id: 'aria-unsupported-attr',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message: 'ARIA attribute is supported',
          },
          {
            id: 'aria-prohibited-attr',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'ARIA attribute is allowed',
          },
        ],
        impact: null,
        html: '<button type="button" aria-haspopup="true" aria-expanded="false" class="navigation__item navigation__link navigation__button">',
        target: [
          '.navigation__item:nth-child(3) > .navigation__button[aria-haspopup="true"][type="button"]',
        ],
      },
      {
        any: [],
        all: [
          {
            id: 'aria-allowed-attr',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message: 'ARIA attributes are used correctly for the defined role',
          },
          {
            id: 'aria-conditional-attr',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'ARIA attribute is allowed',
          },
        ],
        none: [
          {
            id: 'aria-unsupported-attr',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message: 'ARIA attribute is supported',
          },
          {
            id: 'aria-prohibited-attr',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'ARIA attribute is allowed',
          },
        ],
        impact: null,
        html: '<button type="button" aria-haspopup="true" aria-expanded="false" class="navigation__item navigation__link navigation__button">',
        target: [
          '.navigation__item:nth-child(5) > .navigation__button[aria-haspopup="true"][type="button"]',
        ],
      },
      {
        any: [],
        all: [
          {
            id: 'aria-allowed-attr',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message: 'ARIA attributes are used correctly for the defined role',
          },
          {
            id: 'aria-conditional-attr',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'ARIA attribute is allowed',
          },
        ],
        none: [
          {
            id: 'aria-unsupported-attr',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message: 'ARIA attribute is supported',
          },
          {
            id: 'aria-prohibited-attr',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'ARIA attribute is allowed',
          },
        ],
        impact: null,
        html: '<a href="/eu-funded-projects" aria-label="Machine Learning" class="navigation__link">',
        target: ['a[href$="eu-funded-projects"]'],
      },
      {
        any: [],
        all: [
          {
            id: 'aria-allowed-attr',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message: 'ARIA attributes are used correctly for the defined role',
          },
          {
            id: 'aria-conditional-attr',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'ARIA attribute is allowed',
          },
        ],
        none: [
          {
            id: 'aria-unsupported-attr',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message: 'ARIA attribute is supported',
          },
          {
            id: 'aria-prohibited-attr',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'ARIA attribute is allowed',
          },
        ],
        impact: null,
        html: '<section aria-label="Contact information" class="footer__contact">',
        target: ['.footer__contact'],
      },
      {
        any: [],
        all: [
          {
            id: 'aria-allowed-attr',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message: 'ARIA attributes are used correctly for the defined role',
          },
          {
            id: 'aria-conditional-attr',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'ARIA attribute is allowed',
          },
        ],
        none: [
          {
            id: 'aria-unsupported-attr',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message: 'ARIA attribute is supported',
          },
          {
            id: 'aria-prohibited-attr',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'ARIA attribute is allowed',
          },
        ],
        impact: null,
        html: '<a href="mailto:hello@snow.dog" aria-label="mail: hello@snow.dog">\n        hello@snow.dog\n      </a>',
        target: ['a[href$="mailto:hello@snow.dog"]'],
      },
    ],
  },
  {
    id: 'aria-hidden-body',
    impact: null,
    tags: ['cat.aria', 'wcag2a', 'wcag412'],
    description:
      "Ensures aria-hidden='true' is not present on the document body.",
    help: "aria-hidden='true' must not be present on the document body",
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/aria-hidden-body?application=axe-puppeteer',
    nodes: [
      {
        any: [
          {
            id: 'aria-hidden-body',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message: 'No aria-hidden attribute is present on document body',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<body data-aos-easing="ease" data-aos-duration="400" data-aos-delay="0">',
        target: ['body'],
      },
    ],
  },
  {
    id: 'aria-hidden-focus',
    impact: null,
    tags: ['cat.name-role-value', 'wcag2a', 'wcag412', 'TTv5', 'TT6.a'],
    description:
      'Ensures aria-hidden elements are not focusable nor contain focusable elements',
    help: 'ARIA hidden element must not be focusable or contain focusable elements',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/aria-hidden-focus?application=axe-puppeteer',
    nodes: [
      {
        any: [],
        all: [
          {
            id: 'focusable-modal-open',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'No focusable elements while a modal is open',
          },
          {
            id: 'focusable-disabled',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'No focusable elements contained within element',
          },
          {
            id: 'focusable-not-tabbable',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'No focusable elements contained within element',
          },
        ],
        none: [],
        impact: null,
        html: '<svg aria-hidden="true" style="position: absolute; width: 0px; height: 0px; overflow: hidden;">',
        target: ['svg[aria-hidden="true"]'],
      },
    ],
  },
  {
    id: 'aria-valid-attr-value',
    impact: null,
    tags: ['cat.aria', 'wcag2a', 'wcag412'],
    description: 'Ensures all ARIA attributes have valid values',
    help: 'ARIA attributes must conform to valid values',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/aria-valid-attr-value?application=axe-puppeteer',
    nodes: [
      {
        any: [],
        all: [
          {
            id: 'aria-valid-attr-value',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message: 'ARIA attribute values are valid',
          },
          {
            id: 'aria-errormessage',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message:
              'aria-errormessage exists and references elements visible to screen readers that use a supported aria-errormessage technique',
          },
          {
            id: 'aria-level',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'aria-level values are valid',
          },
        ],
        none: [],
        impact: null,
        html: '<section data-v-f9cdd344="" data-v-ebb4d8dc="" aria-label="Cookie privacy" class="info-bar info-bar__cookies">',
        target: ['.info-bar'],
      },
      {
        any: [],
        all: [
          {
            id: 'aria-valid-attr-value',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message: 'ARIA attribute values are valid',
          },
          {
            id: 'aria-errormessage',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message:
              'aria-errormessage exists and references elements visible to screen readers that use a supported aria-errormessage technique',
          },
          {
            id: 'aria-level',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'aria-level values are valid',
          },
        ],
        none: [],
        impact: null,
        html: '<button type="button" aria-label="Skip navigation" class="button scroll__button scroll__button--visually-hidden null" data-v-d354ce36="">\n      Skip navigation\n    </button>',
        target: ['.scroll__button--visually-hidden'],
      },
      {
        any: [],
        all: [
          {
            id: 'aria-valid-attr-value',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message: 'ARIA attribute values are valid',
          },
          {
            id: 'aria-errormessage',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message:
              'aria-errormessage exists and references elements visible to screen readers that use a supported aria-errormessage technique',
          },
          {
            id: 'aria-level',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'aria-level values are valid',
          },
        ],
        none: [],
        impact: null,
        html: '<a href="/" aria-current="page" aria-label="Snowdog Homepage" class="nuxt-link-exact-active nuxt-link-active logo link--no-decoration" data-v-764a8d53="">',
        target: ['.nuxt-link-exact-active'],
      },
      {
        any: [],
        all: [
          {
            id: 'aria-valid-attr-value',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message: 'ARIA attribute values are valid',
          },
          {
            id: 'aria-errormessage',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message:
              'aria-errormessage exists and references elements visible to screen readers that use a supported aria-errormessage technique',
          },
          {
            id: 'aria-level',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'aria-level values are valid',
          },
        ],
        none: [],
        impact: null,
        html: '<button type="button" aria-haspopup="true" aria-expanded="false" class="navigation__item navigation__link navigation__button">',
        target: [
          '.navigation__item:nth-child(2) > .navigation__button[aria-haspopup="true"][type="button"]',
        ],
      },
      {
        any: [],
        all: [
          {
            id: 'aria-valid-attr-value',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message: 'ARIA attribute values are valid',
          },
          {
            id: 'aria-errormessage',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message:
              'aria-errormessage exists and references elements visible to screen readers that use a supported aria-errormessage technique',
          },
          {
            id: 'aria-level',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'aria-level values are valid',
          },
        ],
        none: [],
        impact: null,
        html: '<button type="button" aria-haspopup="true" aria-expanded="false" class="navigation__item navigation__link navigation__button">',
        target: [
          '.navigation__item:nth-child(3) > .navigation__button[aria-haspopup="true"][type="button"]',
        ],
      },
      {
        any: [],
        all: [
          {
            id: 'aria-valid-attr-value',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message: 'ARIA attribute values are valid',
          },
          {
            id: 'aria-errormessage',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message:
              'aria-errormessage exists and references elements visible to screen readers that use a supported aria-errormessage technique',
          },
          {
            id: 'aria-level',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'aria-level values are valid',
          },
        ],
        none: [],
        impact: null,
        html: '<button type="button" aria-haspopup="true" aria-expanded="false" class="navigation__item navigation__link navigation__button">',
        target: [
          '.navigation__item:nth-child(5) > .navigation__button[aria-haspopup="true"][type="button"]',
        ],
      },
      {
        any: [],
        all: [
          {
            id: 'aria-valid-attr-value',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message: 'ARIA attribute values are valid',
          },
          {
            id: 'aria-errormessage',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message:
              'aria-errormessage exists and references elements visible to screen readers that use a supported aria-errormessage technique',
          },
          {
            id: 'aria-level',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'aria-level values are valid',
          },
        ],
        none: [],
        impact: null,
        html: '<a href="/eu-funded-projects" aria-label="Machine Learning" class="navigation__link">',
        target: ['a[href$="eu-funded-projects"]'],
      },
      {
        any: [],
        all: [
          {
            id: 'aria-valid-attr-value',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message: 'ARIA attribute values are valid',
          },
          {
            id: 'aria-errormessage',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message:
              'aria-errormessage exists and references elements visible to screen readers that use a supported aria-errormessage technique',
          },
          {
            id: 'aria-level',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'aria-level values are valid',
          },
        ],
        none: [],
        impact: null,
        html: '<section aria-label="Contact information" class="footer__contact">',
        target: ['.footer__contact'],
      },
      {
        any: [],
        all: [
          {
            id: 'aria-valid-attr-value',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message: 'ARIA attribute values are valid',
          },
          {
            id: 'aria-errormessage',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message:
              'aria-errormessage exists and references elements visible to screen readers that use a supported aria-errormessage technique',
          },
          {
            id: 'aria-level',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'aria-level values are valid',
          },
        ],
        none: [],
        impact: null,
        html: '<a href="mailto:hello@snow.dog" aria-label="mail: hello@snow.dog">\n        hello@snow.dog\n      </a>',
        target: ['a[href$="mailto:hello@snow.dog"]'],
      },
    ],
  },
  {
    id: 'aria-valid-attr',
    impact: null,
    tags: ['cat.aria', 'wcag2a', 'wcag412'],
    description:
      'Ensures attributes that begin with aria- are valid ARIA attributes',
    help: 'ARIA attributes must conform to valid names',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/aria-valid-attr?application=axe-puppeteer',
    nodes: [
      {
        any: [
          {
            id: 'aria-valid-attr',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message: 'ARIA attribute name is valid',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<section data-v-f9cdd344="" data-v-ebb4d8dc="" aria-label="Cookie privacy" class="info-bar info-bar__cookies">',
        target: ['.info-bar'],
      },
      {
        any: [
          {
            id: 'aria-valid-attr',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message: 'ARIA attribute name is valid',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<button type="button" aria-label="Skip navigation" class="button scroll__button scroll__button--visually-hidden null" data-v-d354ce36="">\n      Skip navigation\n    </button>',
        target: ['.scroll__button--visually-hidden'],
      },
      {
        any: [
          {
            id: 'aria-valid-attr',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message: 'ARIA attribute name is valid',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<a href="/" aria-current="page" aria-label="Snowdog Homepage" class="nuxt-link-exact-active nuxt-link-active logo link--no-decoration" data-v-764a8d53="">',
        target: ['.nuxt-link-exact-active'],
      },
      {
        any: [
          {
            id: 'aria-valid-attr',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message: 'ARIA attribute name is valid',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<button type="button" aria-haspopup="true" aria-expanded="false" class="navigation__item navigation__link navigation__button">',
        target: [
          '.navigation__item:nth-child(2) > .navigation__button[aria-haspopup="true"][type="button"]',
        ],
      },
      {
        any: [
          {
            id: 'aria-valid-attr',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message: 'ARIA attribute name is valid',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<button type="button" aria-haspopup="true" aria-expanded="false" class="navigation__item navigation__link navigation__button">',
        target: [
          '.navigation__item:nth-child(3) > .navigation__button[aria-haspopup="true"][type="button"]',
        ],
      },
      {
        any: [
          {
            id: 'aria-valid-attr',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message: 'ARIA attribute name is valid',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<button type="button" aria-haspopup="true" aria-expanded="false" class="navigation__item navigation__link navigation__button">',
        target: [
          '.navigation__item:nth-child(5) > .navigation__button[aria-haspopup="true"][type="button"]',
        ],
      },
      {
        any: [
          {
            id: 'aria-valid-attr',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message: 'ARIA attribute name is valid',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<a href="/eu-funded-projects" aria-label="Machine Learning" class="navigation__link">',
        target: ['a[href$="eu-funded-projects"]'],
      },
      {
        any: [
          {
            id: 'aria-valid-attr',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message: 'ARIA attribute name is valid',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<section aria-label="Contact information" class="footer__contact">',
        target: ['.footer__contact'],
      },
      {
        any: [
          {
            id: 'aria-valid-attr',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message: 'ARIA attribute name is valid',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<a href="mailto:hello@snow.dog" aria-label="mail: hello@snow.dog">\n        hello@snow.dog\n      </a>',
        target: ['a[href$="mailto:hello@snow.dog"]'],
      },
    ],
  },
  {
    id: 'button-name',
    impact: null,
    tags: [
      'cat.name-role-value',
      'wcag2a',
      'wcag412',
      'section508',
      'section508.22.a',
      'ACT',
      'TTv5',
      'TT6.a',
    ],
    description: 'Ensures buttons have discernible text',
    help: 'Buttons must have discernible text',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/button-name?application=axe-puppeteer',
    nodes: [
      {
        any: [
          {
            id: 'button-has-visible-text',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message: 'Element has inner text that is visible to screen readers',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<button data-v-f9cdd344="" class="link link--no-decoration info-bar__close">\n    Ok, close\n  </button>',
        target: ['.link'],
      },
      {
        any: [
          {
            id: 'button-has-visible-text',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message: 'Element has inner text that is visible to screen readers',
          },
          {
            id: 'aria-label',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'aria-label attribute exists and is not empty',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<button type="button" aria-label="Skip navigation" class="button scroll__button scroll__button--visually-hidden null" data-v-d354ce36="">\n      Skip navigation\n    </button>',
        target: ['.scroll__button--visually-hidden'],
      },
      {
        any: [
          {
            id: 'button-has-visible-text',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message: 'Element has inner text that is visible to screen readers',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<button type="button" aria-haspopup="true" aria-expanded="false" class="navigation__item navigation__link navigation__button">',
        target: [
          '.navigation__item:nth-child(2) > .navigation__button[aria-haspopup="true"][type="button"]',
        ],
      },
      {
        any: [
          {
            id: 'button-has-visible-text',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message: 'Element has inner text that is visible to screen readers',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<button type="button" aria-haspopup="true" aria-expanded="false" class="navigation__item navigation__link navigation__button">',
        target: [
          '.navigation__item:nth-child(3) > .navigation__button[aria-haspopup="true"][type="button"]',
        ],
      },
      {
        any: [
          {
            id: 'button-has-visible-text',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message: 'Element has inner text that is visible to screen readers',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<button type="button" aria-haspopup="true" aria-expanded="false" class="navigation__item navigation__link navigation__button">',
        target: [
          '.navigation__item:nth-child(5) > .navigation__button[aria-haspopup="true"][type="button"]',
        ],
      },
      {
        any: [
          {
            id: 'button-has-visible-text',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message: 'Element has inner text that is visible to screen readers',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<button type="button" class="button scroll__button scroll-top" data-v-d354ce36="">',
        target: ['.scroll-top'],
      },
    ],
  },
  {
    id: 'bypass',
    impact: null,
    tags: [
      'cat.keyboard',
      'wcag2a',
      'wcag241',
      'section508',
      'section508.22.o',
      'TTv5',
      'TT9.a',
    ],
    description:
      'Ensures each page has at least one mechanism for a user to bypass navigation and jump straight to the content',
    help: 'Page must have means to bypass repeated blocks',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/bypass?application=axe-puppeteer',
    nodes: [
      {
        any: [
          {
            id: 'header-present',
            data: null,
            relatedNodes: [
              {
                html: '<h1 class="main-top__title" data-v-2b668d06="">We help you grow \n beyond eCommerce</h1>',
                target: ['.main-top__title'],
              },
              {
                html: '<h1 class="about-block__heading heading--border">\n        Transform your eCommerce\n      </h1>',
                target: [
                  '.about-block.aos-init[data-aos="fade-up"]:nth-child(2) > .about-block__text > .about-block__inner > .about-block__heading.heading--border',
                ],
              },
              {
                html: '<h1 class="about-block__heading heading--border">\n        We elevate customer experiences\n      </h1>',
                target: [
                  '.about-block.aos-init[data-aos="fade-up"]:nth-child(3) > .about-block__text > .about-block__inner > .about-block__heading.heading--border',
                ],
              },
              {
                html: '<h1 class="about-block__heading heading--border">\n        Join Snowdog\n      </h1>',
                target: [
                  '.about-block.aos-init[data-aos="fade-up"]:nth-child(4) > .about-block__text > .about-block__inner > .about-block__heading.heading--border',
                ],
              },
              {
                html: '<h2 class="footer__contact-heading">\n      Contact\n    </h2>',
                target: ['h2'],
              },
            ],
            impact: 'serious',
            message: 'Page has a heading',
          },
          {
            id: 'landmark',
            data: null,
            relatedNodes: [
              {
                html: '<main class="main-content" data-v-ebb4d8dc="">',
                target: ['main'],
              },
            ],
            impact: 'serious',
            message: 'Page has a landmark region',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<html lang="en" data-n-head="%7B%22lang%22:%7B%22ssr%22:%22en%22%7D%7D" class="js-focus-visible" data-js-focus-visible="">',
        target: ['html'],
      },
    ],
  },
  {
    id: 'color-contrast',
    impact: 'serious',
    tags: ['cat.color', 'wcag2aa', 'wcag143', 'ACT', 'TTv5', 'TT13.c'],
    description:
      'Ensures the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds',
    help: 'Elements must meet minimum color contrast ratio thresholds',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/color-contrast?application=axe-puppeteer',
    nodes: [
      {
        any: [
          {
            id: 'color-contrast',
            data: {
              fgColor: '#020c14',
              bgColor: '#f3f3f3',
              contrastRatio: 17.76,
              fontSize: '9.0pt (12px)',
              fontWeight: 'normal',
              expectedContrastRatio: '4.5:1',
            },
            relatedNodes: [],
            impact: 'serious',
            message: 'Element has sufficient color contrast of 17.76',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<span data-v-f9cdd344="" class="info-bar__text">\n    This site requires cookies to realize our services in accord with\n    <a data-v-f9cdd344="" href="/privacy" class="info-bar__link">\n      our cookies policy\n    </a></span>',
        target: ['.info-bar__text'],
      },
      {
        any: [
          {
            id: 'color-contrast',
            data: {
              fgColor: '#000000',
              bgColor: '#f3f3f3',
              contrastRatio: 18.92,
              fontSize: '9.0pt (12px)',
              fontWeight: 'normal',
              expectedContrastRatio: '4.5:1',
            },
            relatedNodes: [],
            impact: 'serious',
            message: 'Element has sufficient color contrast of 18.92',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<a data-v-f9cdd344="" href="/privacy" class="info-bar__link">\n      our cookies policy\n    </a>',
        target: ['.info-bar__link'],
      },
      {
        any: [
          {
            id: 'color-contrast',
            data: {
              fgColor: '#020c14',
              bgColor: '#f3f3f3',
              contrastRatio: 17.76,
              fontSize: '9.0pt (12px)',
              fontWeight: 'bold',
              expectedContrastRatio: '4.5:1',
            },
            relatedNodes: [],
            impact: 'serious',
            message: 'Element has sufficient color contrast of 17.76',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<button data-v-f9cdd344="" class="link link--no-decoration info-bar__close">\n    Ok, close\n  </button>',
        target: ['.link'],
      },
      {
        any: [
          {
            id: 'color-contrast',
            data: {
              fgColor: '#2f2a95',
              bgColor: '#ffffff',
              contrastRatio: 11.13,
              fontSize: '9.0pt (12px)',
              fontWeight: 'bold',
              expectedContrastRatio: '4.5:1',
            },
            relatedNodes: [],
            impact: 'serious',
            message: 'Element has sufficient color contrast of 11.13',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<a href="/contact" class="button main-top__button" data-v-2b668d06="">\n        Get in touch\n      </a>',
        target: ['.main-top__button'],
      },
      {
        any: [
          {
            id: 'color-contrast',
            data: {
              fgColor: '#68696d',
              bgColor: '#ffffff',
              contrastRatio: 5.48,
              fontSize: '10.5pt (14px)',
              fontWeight: 'normal',
              expectedContrastRatio: '4.5:1',
            },
            relatedNodes: [],
            impact: 'serious',
            message: 'Element has sufficient color contrast of 5.48',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<span class="scroll-top__text">\n    Up\n  </span>',
        target: ['.scroll-top__text'],
      },
    ],
  },
  {
    id: 'document-title',
    impact: null,
    tags: [
      'cat.text-alternatives',
      'wcag2a',
      'wcag242',
      'ACT',
      'TTv5',
      'TT12.a',
    ],
    description:
      'Ensures each HTML document contains a non-empty <title> element',
    help: 'Documents must have <title> element to aid in navigation',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/document-title?application=axe-puppeteer',
    nodes: [
      {
        any: [
          {
            id: 'doc-has-title',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'Document has a non-empty <title> element',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<html lang="en" data-n-head="%7B%22lang%22:%7B%22ssr%22:%22en%22%7D%7D" class="js-focus-visible" data-js-focus-visible="">',
        target: ['html'],
      },
    ],
  },
  {
    id: 'duplicate-id',
    impact: null,
    tags: ['cat.parsing', 'wcag2a', 'wcag411'],
    description: 'Ensures every id attribute value is unique',
    help: 'id attribute value must be unique',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/duplicate-id?application=axe-puppeteer',
    nodes: [
      {
        any: [
          {
            id: 'duplicate-id',
            data: 'icon-rotate-right',
            relatedNodes: [],
            impact: 'minor',
            message:
              'Document has no static elements that share the same id attribute',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<symbol id="icon-rotate-right" viewBox="0 0 1024 1024">',
        target: ['#icon-rotate-right'],
      },
      {
        any: [
          {
            id: 'duplicate-id',
            data: 'icon-rotate-left',
            relatedNodes: [],
            impact: 'minor',
            message:
              'Document has no static elements that share the same id attribute',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<symbol id="icon-rotate-left" viewBox="0 0 1024 1024">',
        target: ['#icon-rotate-left'],
      },
      {
        any: [
          {
            id: 'duplicate-id',
            data: 'icon-resize',
            relatedNodes: [],
            impact: 'minor',
            message:
              'Document has no static elements that share the same id attribute',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<symbol id="icon-resize" viewBox="0 0 1024 1024">',
        target: ['#icon-resize'],
      },
      {
        any: [
          {
            id: 'duplicate-id',
            data: 'icon-img-broken',
            relatedNodes: [],
            impact: 'minor',
            message:
              'Document has no static elements that share the same id attribute',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<symbol id="icon-img-broken" viewBox="0 0 1024 1024">',
        target: ['#icon-img-broken'],
      },
      {
        any: [
          {
            id: 'duplicate-id',
            data: 'icon-prev',
            relatedNodes: [],
            impact: 'minor',
            message:
              'Document has no static elements that share the same id attribute',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<symbol id="icon-prev" viewBox="0 0 1024 1024">',
        target: ['#icon-prev'],
      },
      {
        any: [
          {
            id: 'duplicate-id',
            data: 'icon-next',
            relatedNodes: [],
            impact: 'minor',
            message:
              'Document has no static elements that share the same id attribute',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<symbol id="icon-next" viewBox="0 0 1024 1024">',
        target: ['#icon-next'],
      },
      {
        any: [
          {
            id: 'duplicate-id',
            data: 'icon-zoomin',
            relatedNodes: [],
            impact: 'minor',
            message:
              'Document has no static elements that share the same id attribute',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<symbol id="icon-zoomin" viewBox="0 0 1024 1024">',
        target: ['#icon-zoomin'],
      },
      {
        any: [
          {
            id: 'duplicate-id',
            data: 'icon-close',
            relatedNodes: [],
            impact: 'minor',
            message:
              'Document has no static elements that share the same id attribute',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<symbol id="icon-close" viewBox="0 0 1024 1024"><path d="M570.24 512l259.2 259.2-58.88 58.24L512 570.24l-261.12 261.12-58.24-58.24L453.76 512 194.56 252.8l58.24-58.24L512 453.76l261.12-261.12 58.24 58.24z"></path></symbol>',
        target: ['#icon-close'],
      },
      {
        any: [
          {
            id: 'duplicate-id',
            data: 'icon-zoomout',
            relatedNodes: [],
            impact: 'minor',
            message:
              'Document has no static elements that share the same id attribute',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<symbol id="icon-zoomout" viewBox="0 0 1024 1024">',
        target: ['#icon-zoomout'],
      },
      {
        any: [
          {
            id: 'duplicate-id',
            data: '__nuxt',
            relatedNodes: [],
            impact: 'minor',
            message:
              'Document has no static elements that share the same id attribute',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<div id="__nuxt">',
        target: ['#__nuxt'],
      },
      {
        any: [
          {
            id: 'duplicate-id',
            data: '__layout',
            relatedNodes: [],
            impact: 'minor',
            message:
              'Document has no static elements that share the same id attribute',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<div id="__layout">',
        target: ['#__layout'],
      },
      {
        any: [
          {
            id: 'duplicate-id',
            data: null,
            relatedNodes: [],
            impact: 'minor',
            message:
              'Document has no static elements that share the same id attribute',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<script type="text/javascript" id="">',
        target: ['body > script[type="text/javascript"]'],
      },
    ],
  },
  {
    id: 'empty-heading',
    impact: null,
    tags: ['cat.name-role-value', 'best-practice'],
    description: 'Ensures headings have discernible text',
    help: 'Headings should not be empty',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/empty-heading?application=axe-puppeteer',
    nodes: [
      {
        any: [
          {
            id: 'has-visible-text',
            data: null,
            relatedNodes: [],
            impact: 'minor',
            message: 'Element has text that is visible to screen readers',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<h1 class="main-top__title" data-v-2b668d06="">We help you grow \n beyond eCommerce</h1>',
        target: ['.main-top__title'],
      },
      {
        any: [
          {
            id: 'has-visible-text',
            data: null,
            relatedNodes: [],
            impact: 'minor',
            message: 'Element has text that is visible to screen readers',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<h1 class="about-block__heading heading--border">\n        Transform your eCommerce\n      </h1>',
        target: [
          '.about-block.aos-init[data-aos="fade-up"]:nth-child(2) > .about-block__text > .about-block__inner > .about-block__heading.heading--border',
        ],
      },
      {
        any: [
          {
            id: 'has-visible-text',
            data: null,
            relatedNodes: [],
            impact: 'minor',
            message: 'Element has text that is visible to screen readers',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<h1 class="about-block__heading heading--border">\n        We elevate customer experiences\n      </h1>',
        target: [
          '.about-block.aos-init[data-aos="fade-up"]:nth-child(3) > .about-block__text > .about-block__inner > .about-block__heading.heading--border',
        ],
      },
      {
        any: [
          {
            id: 'has-visible-text',
            data: null,
            relatedNodes: [],
            impact: 'minor',
            message: 'Element has text that is visible to screen readers',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<h1 class="about-block__heading heading--border">\n        Join Snowdog\n      </h1>',
        target: [
          '.about-block.aos-init[data-aos="fade-up"]:nth-child(4) > .about-block__text > .about-block__inner > .about-block__heading.heading--border',
        ],
      },
      {
        any: [
          {
            id: 'has-visible-text',
            data: null,
            relatedNodes: [],
            impact: 'minor',
            message: 'Element has text that is visible to screen readers',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<h2 class="footer__contact-heading">\n      Contact\n    </h2>',
        target: ['h2'],
      },
    ],
  },
  {
    id: 'heading-order',
    impact: null,
    tags: ['cat.semantics', 'best-practice'],
    description: 'Ensures the order of headings is semantically correct',
    help: 'Heading levels should only increase by one',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/heading-order?application=axe-puppeteer',
    nodes: [
      {
        any: [
          {
            id: 'heading-order',
            data: {
              headingOrder: [
                {
                  ancestry: [
                    'html > body > div:nth-child(3) > div > div > main:nth-child(3) > div > div:nth-child(1) > div > h1:nth-child(1)',
                  ],
                  level: 1,
                },
                {
                  ancestry: [
                    'html > body > div:nth-child(3) > div > div > main:nth-child(3) > div > section:nth-child(2) > div:nth-child(2) > div > h1:nth-child(1)',
                  ],
                  level: 1,
                },
                {
                  ancestry: [
                    'html > body > div:nth-child(3) > div > div > main:nth-child(3) > div > section:nth-child(3) > div:nth-child(2) > div > h1:nth-child(1)',
                  ],
                  level: 1,
                },
                {
                  ancestry: [
                    'html > body > div:nth-child(3) > div > div > main:nth-child(3) > div > section:nth-child(4) > div:nth-child(2) > div > h1:nth-child(1)',
                  ],
                  level: 1,
                },
                {
                  ancestry: [
                    'html > body > div:nth-child(3) > div > div > div:nth-child(4) > footer:nth-child(2) > section:nth-child(2) > h2:nth-child(1)',
                  ],
                  level: 2,
                },
              ],
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'Heading order valid',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<h1 class="main-top__title" data-v-2b668d06="">We help you grow \n beyond eCommerce</h1>',
        target: ['.main-top__title'],
      },
      {
        any: [
          {
            id: 'heading-order',
            data: null,
            relatedNodes: [],
            impact: 'moderate',
            message: 'Heading order valid',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<h1 class="about-block__heading heading--border">\n        Transform your eCommerce\n      </h1>',
        target: [
          '.about-block.aos-init[data-aos="fade-up"]:nth-child(2) > .about-block__text > .about-block__inner > .about-block__heading.heading--border',
        ],
      },
      {
        any: [
          {
            id: 'heading-order',
            data: null,
            relatedNodes: [],
            impact: 'moderate',
            message: 'Heading order valid',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<h1 class="about-block__heading heading--border">\n        We elevate customer experiences\n      </h1>',
        target: [
          '.about-block.aos-init[data-aos="fade-up"]:nth-child(3) > .about-block__text > .about-block__inner > .about-block__heading.heading--border',
        ],
      },
      {
        any: [
          {
            id: 'heading-order',
            data: null,
            relatedNodes: [],
            impact: 'moderate',
            message: 'Heading order valid',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<h1 class="about-block__heading heading--border">\n        Join Snowdog\n      </h1>',
        target: [
          '.about-block.aos-init[data-aos="fade-up"]:nth-child(4) > .about-block__text > .about-block__inner > .about-block__heading.heading--border',
        ],
      },
      {
        any: [
          {
            id: 'heading-order',
            data: null,
            relatedNodes: [],
            impact: 'moderate',
            message: 'Heading order valid',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<h2 class="footer__contact-heading">\n      Contact\n    </h2>',
        target: ['h2'],
      },
    ],
  },
  {
    id: 'html-has-lang',
    impact: null,
    tags: ['cat.language', 'wcag2a', 'wcag311', 'ACT', 'TTv5', 'TT11.a'],
    description: 'Ensures every HTML document has a lang attribute',
    help: '<html> element must have a lang attribute',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/html-has-lang?application=axe-puppeteer',
    nodes: [
      {
        any: [
          {
            id: 'has-lang',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'The <html> element has a lang attribute',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<html lang="en" data-n-head="%7B%22lang%22:%7B%22ssr%22:%22en%22%7D%7D" class="js-focus-visible" data-js-focus-visible="">',
        target: ['html'],
      },
    ],
  },
  {
    id: 'html-lang-valid',
    impact: null,
    tags: ['cat.language', 'wcag2a', 'wcag311', 'ACT', 'TTv5', 'TT11.a'],
    description:
      'Ensures the lang attribute of the <html> element has a valid value',
    help: '<html> element must have a valid value for the lang attribute',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/html-lang-valid?application=axe-puppeteer',
    nodes: [
      {
        any: [],
        all: [],
        none: [
          {
            id: 'valid-lang',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message:
              'Value of lang attribute is included in the list of valid languages',
          },
        ],
        impact: null,
        html: '<html lang="en" data-n-head="%7B%22lang%22:%7B%22ssr%22:%22en%22%7D%7D" class="js-focus-visible" data-js-focus-visible="">',
        target: ['html'],
      },
    ],
  },
  {
    id: 'image-alt',
    impact: null,
    tags: [
      'cat.text-alternatives',
      'wcag2a',
      'wcag111',
      'section508',
      'section508.22.a',
      'ACT',
      'TTv5',
      'TT7.a',
      'TT7.b',
    ],
    description:
      'Ensures <img> elements have alternate text or a role of none or presentation',
    help: 'Images must have alternate text',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/image-alt?application=axe-puppeteer',
    nodes: [
      {
        any: [
          {
            id: 'has-alt',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message: 'Element has an alt attribute',
          },
        ],
        all: [],
        none: [
          {
            id: 'alt-space-value',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message: 'Element has a valid alt attribute value',
          },
        ],
        impact: null,
        html: '<img src="/_nuxt/image/65f9ce.webp" width="768" height="672" alt="Woman is using Magento Kiosk app" loading="lazy" class="about-block__picture" data-v-f04dc4e2="">',
        target: ['img[src$="65f9ce.webp"]'],
      },
      {
        any: [
          {
            id: 'has-alt',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message: 'Element has an alt attribute',
          },
        ],
        all: [],
        none: [
          {
            id: 'alt-space-value',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message: 'Element has a valid alt attribute value',
          },
        ],
        impact: null,
        html: '<img src="/_nuxt/image/705253.webp" width="896" height="720" alt="Nobleplace store" loading="lazy" class="about-block__picture" data-v-f04dc4e2="">',
        target: ['img[src="/_nuxt/image/705253.webp"]'],
      },
      {
        any: [
          {
            id: 'has-alt',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message: 'Element has an alt attribute',
          },
        ],
        all: [],
        none: [
          {
            id: 'alt-space-value',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message: 'Element has a valid alt attribute value',
          },
        ],
        impact: null,
        html: '<img src="/_nuxt/image/457137.webp" width="768" height="640" alt="Bartek is drawing a plan" loading="lazy" class="about-block__picture" data-v-f04dc4e2="">',
        target: ['img[src="/_nuxt/image/457137.webp"]'],
      },
      {
        any: [
          {
            id: 'has-alt',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message: 'Element has an alt attribute',
          },
        ],
        all: [],
        none: [
          {
            id: 'alt-space-value',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message: 'Element has a valid alt attribute value',
          },
        ],
        impact: null,
        html: '<img src="/_nuxt/image/038ceb.webp" width="127" height="54" alt="European Funds - regional program - logo" loading="lazy" img-class="footer__image" class="footer__image" data-v-f04dc4e2="">',
        target: ['img[src$="038ceb.webp"]'],
      },
      {
        any: [
          {
            id: 'has-alt',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message: 'Element has an alt attribute',
          },
        ],
        all: [],
        none: [
          {
            id: 'alt-space-value',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message: 'Element has a valid alt attribute value',
          },
        ],
        impact: null,
        html: '<img src="/_nuxt/image/759b07.webp" width="189" height="54" alt="European Union Development Fund - logo" loading="lazy" img-class="footer__image" class="footer__image" data-v-f04dc4e2="">',
        target: ['img[src$="759b07.webp"]'],
      },
      {
        any: [
          {
            id: 'has-alt',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message: 'Element has an alt attribute',
          },
        ],
        all: [],
        none: [
          {
            id: 'alt-space-value',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message: 'Element has a valid alt attribute value',
          },
        ],
        impact: null,
        html: '<img src="/_nuxt/image/4607a0.webp" width="135" height="54" alt="Great Poland Region - logo" loading="lazy" img-class="footer__image" class="footer__image" data-v-f04dc4e2="">',
        target: ['img[src$="4607a0.webp"]'],
      },
    ],
  },
  {
    id: 'image-redundant-alt',
    impact: null,
    tags: ['cat.text-alternatives', 'best-practice'],
    description: 'Ensure image alternative is not repeated as text',
    help: 'Alternative text of images should not be repeated as text',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/image-redundant-alt?application=axe-puppeteer',
    nodes: [
      {
        any: [],
        all: [],
        none: [
          {
            id: 'duplicate-img-label',
            data: null,
            relatedNodes: [],
            impact: 'minor',
            message:
              'Element does not duplicate existing text in <img> alt text',
          },
        ],
        impact: null,
        html: '<img src="/_nuxt/image/65f9ce.webp" width="768" height="672" alt="Woman is using Magento Kiosk app" loading="lazy" class="about-block__picture" data-v-f04dc4e2="">',
        target: ['img[src$="65f9ce.webp"]'],
      },
      {
        any: [],
        all: [],
        none: [
          {
            id: 'duplicate-img-label',
            data: null,
            relatedNodes: [],
            impact: 'minor',
            message:
              'Element does not duplicate existing text in <img> alt text',
          },
        ],
        impact: null,
        html: '<img src="/_nuxt/image/705253.webp" width="896" height="720" alt="Nobleplace store" loading="lazy" class="about-block__picture" data-v-f04dc4e2="">',
        target: ['img[src="/_nuxt/image/705253.webp"]'],
      },
      {
        any: [],
        all: [],
        none: [
          {
            id: 'duplicate-img-label',
            data: null,
            relatedNodes: [],
            impact: 'minor',
            message:
              'Element does not duplicate existing text in <img> alt text',
          },
        ],
        impact: null,
        html: '<img src="/_nuxt/image/457137.webp" width="768" height="640" alt="Bartek is drawing a plan" loading="lazy" class="about-block__picture" data-v-f04dc4e2="">',
        target: ['img[src="/_nuxt/image/457137.webp"]'],
      },
      {
        any: [],
        all: [],
        none: [
          {
            id: 'duplicate-img-label',
            data: null,
            relatedNodes: [],
            impact: 'minor',
            message:
              'Element does not duplicate existing text in <img> alt text',
          },
        ],
        impact: null,
        html: '<img src="/_nuxt/image/038ceb.webp" width="127" height="54" alt="European Funds - regional program - logo" loading="lazy" img-class="footer__image" class="footer__image" data-v-f04dc4e2="">',
        target: ['img[src$="038ceb.webp"]'],
      },
      {
        any: [],
        all: [],
        none: [
          {
            id: 'duplicate-img-label',
            data: null,
            relatedNodes: [],
            impact: 'minor',
            message:
              'Element does not duplicate existing text in <img> alt text',
          },
        ],
        impact: null,
        html: '<img src="/_nuxt/image/759b07.webp" width="189" height="54" alt="European Union Development Fund - logo" loading="lazy" img-class="footer__image" class="footer__image" data-v-f04dc4e2="">',
        target: ['img[src$="759b07.webp"]'],
      },
      {
        any: [],
        all: [],
        none: [
          {
            id: 'duplicate-img-label',
            data: null,
            relatedNodes: [],
            impact: 'minor',
            message:
              'Element does not duplicate existing text in <img> alt text',
          },
        ],
        impact: null,
        html: '<img src="/_nuxt/image/4607a0.webp" width="135" height="54" alt="Great Poland Region - logo" loading="lazy" img-class="footer__image" class="footer__image" data-v-f04dc4e2="">',
        target: ['img[src$="4607a0.webp"]'],
      },
    ],
  },
  {
    id: 'landmark-banner-is-top-level',
    impact: null,
    tags: ['cat.semantics', 'best-practice'],
    description: 'Ensures the banner landmark is at top level',
    help: 'Banner landmark should not be contained in another landmark',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/landmark-banner-is-top-level?application=axe-puppeteer',
    nodes: [
      {
        any: [
          {
            id: 'landmark-is-top-level',
            data: {
              role: 'banner',
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'The banner landmark is at the top level.',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<header class="header" data-v-ebb4d8dc="">',
        target: ['header'],
      },
    ],
  },
  {
    id: 'landmark-contentinfo-is-top-level',
    impact: null,
    tags: ['cat.semantics', 'best-practice'],
    description: 'Ensures the contentinfo landmark is at top level',
    help: 'Contentinfo landmark should not be contained in another landmark',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/landmark-contentinfo-is-top-level?application=axe-puppeteer',
    nodes: [
      {
        any: [
          {
            id: 'landmark-is-top-level',
            data: {
              role: 'contentinfo',
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'The contentinfo landmark is at the top level.',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<footer class="footer" data-v-ebb4d8dc="">',
        target: ['footer'],
      },
    ],
  },
  {
    id: 'landmark-main-is-top-level',
    impact: null,
    tags: ['cat.semantics', 'best-practice'],
    description: 'Ensures the main landmark is at top level',
    help: 'Main landmark should not be contained in another landmark',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/landmark-main-is-top-level?application=axe-puppeteer',
    nodes: [
      {
        any: [
          {
            id: 'landmark-is-top-level',
            data: {
              role: 'main',
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'The main landmark is at the top level.',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<main class="main-content" data-v-ebb4d8dc="">',
        target: ['main'],
      },
    ],
  },
  {
    id: 'landmark-no-duplicate-banner',
    impact: null,
    tags: ['cat.semantics', 'best-practice'],
    description: 'Ensures the document has at most one banner landmark',
    help: 'Document should not have more than one banner landmark',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/landmark-no-duplicate-banner?application=axe-puppeteer',
    nodes: [
      {
        any: [
          {
            id: 'page-no-duplicate-banner',
            data: null,
            relatedNodes: [],
            impact: 'moderate',
            message: 'Document does not have more than one banner landmark',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<header class="header" data-v-ebb4d8dc="">',
        target: ['header'],
      },
    ],
  },
  {
    id: 'landmark-no-duplicate-contentinfo',
    impact: null,
    tags: ['cat.semantics', 'best-practice'],
    description: 'Ensures the document has at most one contentinfo landmark',
    help: 'Document should not have more than one contentinfo landmark',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/landmark-no-duplicate-contentinfo?application=axe-puppeteer',
    nodes: [
      {
        any: [
          {
            id: 'page-no-duplicate-contentinfo',
            data: null,
            relatedNodes: [],
            impact: 'moderate',
            message:
              'Document does not have more than one contentinfo landmark',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<footer class="footer" data-v-ebb4d8dc="">',
        target: ['footer'],
      },
    ],
  },
  {
    id: 'landmark-no-duplicate-main',
    impact: null,
    tags: ['cat.semantics', 'best-practice'],
    description: 'Ensures the document has at most one main landmark',
    help: 'Document should not have more than one main landmark',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/landmark-no-duplicate-main?application=axe-puppeteer',
    nodes: [
      {
        any: [
          {
            id: 'page-no-duplicate-main',
            data: null,
            relatedNodes: [],
            impact: 'moderate',
            message: 'Document does not have more than one main landmark',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<main class="main-content" data-v-ebb4d8dc="">',
        target: ['main'],
      },
    ],
  },
  {
    id: 'landmark-one-main',
    impact: null,
    tags: ['cat.semantics', 'best-practice'],
    description: 'Ensures the document has a main landmark',
    help: 'Document should have one main landmark',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/landmark-one-main?application=axe-puppeteer',
    nodes: [
      {
        any: [],
        all: [
          {
            id: 'page-has-main',
            data: null,
            relatedNodes: [
              {
                html: '<main class="main-content" data-v-ebb4d8dc="">',
                target: ['main'],
              },
            ],
            impact: 'moderate',
            message: 'Document has at least one main landmark',
          },
        ],
        none: [],
        impact: null,
        html: '<html lang="en" data-n-head="%7B%22lang%22:%7B%22ssr%22:%22en%22%7D%7D" class="js-focus-visible" data-js-focus-visible="">',
        target: ['html'],
      },
    ],
  },
  {
    id: 'landmark-unique',
    impact: null,
    tags: ['cat.semantics', 'best-practice'],
    help: 'Ensures landmarks are unique',
    description:
      'Landmarks should have a unique role or role/label/title (i.e. accessible name) combination',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/landmark-unique?application=axe-puppeteer',
    nodes: [
      {
        any: [
          {
            id: 'landmark-is-unique',
            data: {
              role: 'region',
              accessibleText: 'cookie privacy',
            },
            relatedNodes: [],
            impact: 'moderate',
            message:
              'Landmarks must have a unique role or role/label/title (i.e. accessible name) combination',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<section data-v-f9cdd344="" data-v-ebb4d8dc="" aria-label="Cookie privacy" class="info-bar info-bar__cookies">',
        target: ['.info-bar'],
      },
      {
        any: [
          {
            id: 'landmark-is-unique',
            data: {
              role: 'banner',
              accessibleText: null,
            },
            relatedNodes: [],
            impact: 'moderate',
            message:
              'Landmarks must have a unique role or role/label/title (i.e. accessible name) combination',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<header class="header" data-v-ebb4d8dc="">',
        target: ['header'],
      },
      {
        any: [
          {
            id: 'landmark-is-unique',
            data: {
              role: 'navigation',
              accessibleText: null,
            },
            relatedNodes: [],
            impact: 'moderate',
            message:
              'Landmarks must have a unique role or role/label/title (i.e. accessible name) combination',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<nav class="navigation">',
        target: ['nav'],
      },
      {
        any: [
          {
            id: 'landmark-is-unique',
            data: {
              role: 'main',
              accessibleText: null,
            },
            relatedNodes: [],
            impact: 'moderate',
            message:
              'Landmarks must have a unique role or role/label/title (i.e. accessible name) combination',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<main class="main-content" data-v-ebb4d8dc="">',
        target: ['main'],
      },
      {
        any: [
          {
            id: 'landmark-is-unique',
            data: {
              role: 'contentinfo',
              accessibleText: null,
            },
            relatedNodes: [],
            impact: 'moderate',
            message:
              'Landmarks must have a unique role or role/label/title (i.e. accessible name) combination',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<footer class="footer" data-v-ebb4d8dc="">',
        target: ['footer'],
      },
      {
        any: [
          {
            id: 'landmark-is-unique',
            data: {
              role: 'region',
              accessibleText: 'contact information',
            },
            relatedNodes: [],
            impact: 'moderate',
            message:
              'Landmarks must have a unique role or role/label/title (i.e. accessible name) combination',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<section aria-label="Contact information" class="footer__contact">',
        target: ['.footer__contact'],
      },
    ],
  },
  {
    id: 'link-name',
    impact: null,
    tags: [
      'cat.name-role-value',
      'wcag2a',
      'wcag412',
      'wcag244',
      'section508',
      'section508.22.a',
      'ACT',
      'TTv5',
      'TT6.a',
    ],
    description: 'Ensures links have discernible text',
    help: 'Links must have discernible text',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/link-name?application=axe-puppeteer',
    nodes: [
      {
        any: [
          {
            id: 'has-visible-text',
            data: null,
            relatedNodes: [],
            impact: 'minor',
            message: 'Element has text that is visible to screen readers',
          },
        ],
        all: [],
        none: [
          {
            id: 'focusable-no-name',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'Element is not in tab order or has accessible text',
          },
        ],
        impact: null,
        html: '<a data-v-f9cdd344="" href="/privacy" class="info-bar__link">\n      our cookies policy\n    </a>',
        target: ['.info-bar__link'],
      },
      {
        any: [
          {
            id: 'aria-label',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'aria-label attribute exists and is not empty',
          },
        ],
        all: [],
        none: [
          {
            id: 'focusable-no-name',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'Element is not in tab order or has accessible text',
          },
        ],
        impact: null,
        html: '<a href="/" aria-current="page" aria-label="Snowdog Homepage" class="nuxt-link-exact-active nuxt-link-active logo link--no-decoration" data-v-764a8d53="">',
        target: ['.nuxt-link-exact-active'],
      },
      {
        any: [
          {
            id: 'has-visible-text',
            data: null,
            relatedNodes: [],
            impact: 'minor',
            message: 'Element has text that is visible to screen readers',
          },
        ],
        all: [],
        none: [
          {
            id: 'focusable-no-name',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'Element is not in tab order or has accessible text',
          },
        ],
        impact: null,
        html: '<a href="/our-work" class="navigation__link"><span class="navigation__underscore">\n          Our Work\n        </span></a>',
        target: ['a[href$="our-work"]'],
      },
      {
        any: [
          {
            id: 'has-visible-text',
            data: null,
            relatedNodes: [],
            impact: 'minor',
            message: 'Element has text that is visible to screen readers',
          },
        ],
        all: [],
        none: [
          {
            id: 'focusable-no-name',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'Element is not in tab order or has accessible text',
          },
        ],
        impact: null,
        html: '<a href="/blog" class="navigation__link"><span class="navigation__underscore">\n          Blog\n        </span></a>',
        target: ['a[href$="blog"]'],
      },
      {
        any: [
          {
            id: 'has-visible-text',
            data: null,
            relatedNodes: [],
            impact: 'minor',
            message: 'Element has text that is visible to screen readers',
          },
        ],
        all: [],
        none: [
          {
            id: 'focusable-no-name',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'Element is not in tab order or has accessible text',
          },
        ],
        impact: null,
        html: '<a href="/contact" class="navigation__link"><span class="navigation__underscore">\n          Contact\n        </span></a>',
        target: ['.navigation__link[href$="contact"]'],
      },
      {
        any: [
          {
            id: 'aria-label',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'aria-label attribute exists and is not empty',
          },
        ],
        all: [],
        none: [
          {
            id: 'focusable-no-name',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'Element is not in tab order or has accessible text',
          },
        ],
        impact: null,
        html: '<a href="/eu-funded-projects" aria-label="Machine Learning" class="navigation__link">',
        target: ['a[href$="eu-funded-projects"]'],
      },
      {
        any: [
          {
            id: 'has-visible-text',
            data: null,
            relatedNodes: [],
            impact: 'minor',
            message: 'Element has text that is visible to screen readers',
          },
        ],
        all: [],
        none: [
          {
            id: 'focusable-no-name',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'Element is not in tab order or has accessible text',
          },
        ],
        impact: null,
        html: '<a href="/contact" class="button main-top__button" data-v-2b668d06="">\n        Get in touch\n      </a>',
        target: ['.main-top__button'],
      },
      {
        any: [
          {
            id: 'has-visible-text',
            data: null,
            relatedNodes: [],
            impact: 'minor',
            message: 'Element has text that is visible to screen readers',
          },
        ],
        all: [],
        none: [
          {
            id: 'focusable-no-name',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'Element is not in tab order or has accessible text',
          },
        ],
        impact: null,
        html: '<a href="/unified-commerce" class="button about-block__button">\n          Unified Commerce Services\n        </a>',
        target: ['a[href$="unified-commerce"]'],
      },
      {
        any: [
          {
            id: 'has-visible-text',
            data: null,
            relatedNodes: [],
            impact: 'minor',
            message: 'Element has text that is visible to screen readers',
          },
        ],
        all: [],
        none: [
          {
            id: 'focusable-no-name',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'Element is not in tab order or has accessible text',
          },
        ],
        impact: null,
        html: '<a href="/career" class="button about-block__button">\n          Join us\n        </a>',
        target: ['a[href$="career"]'],
      },
      {
        any: [
          {
            id: 'has-visible-text',
            data: null,
            relatedNodes: [],
            impact: 'minor',
            message: 'Element has text that is visible to screen readers',
          },
        ],
        all: [],
        none: [
          {
            id: 'focusable-no-name',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'Element is not in tab order or has accessible text',
          },
        ],
        impact: null,
        html: '<a href="/privacy" class="footer__link link--no-decoration">\n        Privacy policy\n      </a>',
        target: ['.footer__link.link--no-decoration[href$="privacy"]'],
      },
      {
        any: [
          {
            id: 'has-visible-text',
            data: null,
            relatedNodes: [],
            impact: 'minor',
            message: 'Element has text that is visible to screen readers',
          },
        ],
        all: [],
        none: [
          {
            id: 'focusable-no-name',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'Element is not in tab order or has accessible text',
          },
        ],
        impact: null,
        html: '<a href="https://www.facebook.com/snowdogpl/" target="_blank" rel="noopener" class="footer__link link--no-decoration">\n        Facebook\n      </a>',
        target: [
          '.footer__item:nth-child(2) > .footer__link[target="_blank"][rel="noopener"]',
        ],
      },
      {
        any: [
          {
            id: 'has-visible-text',
            data: null,
            relatedNodes: [],
            impact: 'minor',
            message: 'Element has text that is visible to screen readers',
          },
        ],
        all: [],
        none: [
          {
            id: 'focusable-no-name',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'Element is not in tab order or has accessible text',
          },
        ],
        impact: null,
        html: '<a href="https://twitter.com/SnowdogApps" target="_blank" rel="noopener" class="footer__link link--no-decoration">\n        Twitter\n      </a>',
        target: [
          '.footer__item:nth-child(3) > .footer__link[target="_blank"][rel="noopener"]',
        ],
      },
      {
        any: [
          {
            id: 'has-visible-text',
            data: null,
            relatedNodes: [],
            impact: 'minor',
            message: 'Element has text that is visible to screen readers',
          },
        ],
        all: [],
        none: [
          {
            id: 'focusable-no-name',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'Element is not in tab order or has accessible text',
          },
        ],
        impact: null,
        html: '<a href="https://github.com/SnowdogApps" target="_blank" rel="noopener" class="footer__link link--no-decoration">\n        Github\n      </a>',
        target: ['.footer__item:nth-child(4) > a[href$="SnowdogApps"]'],
      },
      {
        any: [
          {
            id: 'has-visible-text',
            data: null,
            relatedNodes: [],
            impact: 'minor',
            message: 'Element has text that is visible to screen readers',
          },
        ],
        all: [],
        none: [
          {
            id: 'focusable-no-name',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'Element is not in tab order or has accessible text',
          },
        ],
        impact: null,
        html: '<a href="/accessibility-statement" target="_blank" rel="noopener" class="footer__link link--no-decoration">\n        Accessibility statement\n      </a>',
        target: ['a[href$="accessibility-statement"]'],
      },
      {
        any: [
          {
            id: 'has-visible-text',
            data: null,
            relatedNodes: [],
            impact: 'minor',
            message: 'Element has text that is visible to screen readers',
          },
          {
            id: 'aria-label',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'aria-label attribute exists and is not empty',
          },
        ],
        all: [],
        none: [
          {
            id: 'focusable-no-name',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'Element is not in tab order or has accessible text',
          },
        ],
        impact: null,
        html: '<a href="mailto:hello@snow.dog" aria-label="mail: hello@snow.dog">\n        hello@snow.dog\n      </a>',
        target: ['a[href$="mailto:hello@snow.dog"]'],
      },
    ],
  },
  {
    id: 'list',
    impact: null,
    tags: ['cat.structure', 'wcag2a', 'wcag131'],
    description: 'Ensures that lists are structured correctly',
    help: '<ul> and <ol> must only directly contain <li>, <script> or <template> elements',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/list?application=axe-puppeteer',
    nodes: [
      {
        any: [],
        all: [],
        none: [
          {
            id: 'only-listitems',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message:
              'List element only has direct children that are allowed inside <li> elements',
          },
        ],
        impact: null,
        html: '<ul tabindex="-1" class="navigation__list">',
        target: ['.navigation__list'],
      },
      {
        any: [],
        all: [],
        none: [
          {
            id: 'only-listitems',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message:
              'List element only has direct children that are allowed inside <li> elements',
          },
        ],
        impact: null,
        html: '<ul class="footer__menu">',
        target: ['.footer__menu'],
      },
    ],
  },
  {
    id: 'listitem',
    impact: null,
    tags: ['cat.structure', 'wcag2a', 'wcag131'],
    description: 'Ensures <li> elements are used semantically',
    help: '<li> elements must be contained in a <ul> or <ol>',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/listitem?application=axe-puppeteer',
    nodes: [
      {
        any: [
          {
            id: 'listitem',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'List item has a <ul>, <ol> or role="list" parent element',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<li class="navigation__item"><a href="/our-work" class="navigation__link"><span class="navigation__underscore">\n          Our Work\n        </span></a></li>',
        target: ['.navigation__list > .navigation__item:nth-child(1)'],
      },
      {
        any: [
          {
            id: 'listitem',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'List item has a <ul>, <ol> or role="list" parent element',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<li class="navigation__item">',
        target: ['.navigation__item:nth-child(2)'],
      },
      {
        any: [
          {
            id: 'listitem',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'List item has a <ul>, <ol> or role="list" parent element',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<li class="navigation__item">',
        target: ['.navigation__item:nth-child(3)'],
      },
      {
        any: [
          {
            id: 'listitem',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'List item has a <ul>, <ol> or role="list" parent element',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<li class="navigation__item"><a href="/blog" class="navigation__link"><span class="navigation__underscore">\n          Blog\n        </span></a></li>',
        target: ['.navigation__item:nth-child(4)'],
      },
      {
        any: [
          {
            id: 'listitem',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'List item has a <ul>, <ol> or role="list" parent element',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<li class="navigation__item">',
        target: ['.navigation__item:nth-child(5)'],
      },
      {
        any: [
          {
            id: 'listitem',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'List item has a <ul>, <ol> or role="list" parent element',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<li class="navigation__item"><a href="/contact" class="navigation__link"><span class="navigation__underscore">\n          Contact\n        </span></a></li>',
        target: ['.navigation__item:nth-child(6)'],
      },
      {
        any: [
          {
            id: 'listitem',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'List item has a <ul>, <ol> or role="list" parent element',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<li class="footer__item"><a href="/privacy" class="footer__link link--no-decoration">\n        Privacy policy\n      </a></li>',
        target: ['.footer__item:nth-child(1)'],
      },
      {
        any: [
          {
            id: 'listitem',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'List item has a <ul>, <ol> or role="list" parent element',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<li class="footer__item"><a href="https://www.facebook.com/snowdogpl/" target="_blank" rel="noopener" class="footer__link link--no-decoration">\n        Facebook\n      </a></li>',
        target: ['.footer__item:nth-child(2)'],
      },
      {
        any: [
          {
            id: 'listitem',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'List item has a <ul>, <ol> or role="list" parent element',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<li class="footer__item"><a href="https://twitter.com/SnowdogApps" target="_blank" rel="noopener" class="footer__link link--no-decoration">\n        Twitter\n      </a></li>',
        target: ['.footer__item:nth-child(3)'],
      },
      {
        any: [
          {
            id: 'listitem',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'List item has a <ul>, <ol> or role="list" parent element',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<li class="footer__item"><a href="https://github.com/SnowdogApps" target="_blank" rel="noopener" class="footer__link link--no-decoration">\n        Github\n      </a></li>',
        target: ['.footer__item:nth-child(4)'],
      },
      {
        any: [
          {
            id: 'listitem',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'List item has a <ul>, <ol> or role="list" parent element',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<li class="footer__item"><a href="/accessibility-statement" target="_blank" rel="noopener" class="footer__link link--no-decoration">\n        Accessibility statement\n      </a></li>',
        target: ['.footer__item:nth-child(5)'],
      },
    ],
  },
  {
    id: 'meta-viewport-large',
    impact: null,
    tags: ['cat.sensory-and-visual-cues', 'best-practice'],
    description:
      'Ensures <meta name="viewport"> can scale a significant amount',
    help: 'Users should be able to zoom and scale the text up to 500%',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/meta-viewport-large?application=axe-puppeteer',
    nodes: [
      {
        any: [
          {
            id: 'meta-viewport-large',
            data: null,
            relatedNodes: [],
            impact: 'minor',
            message:
              '<meta> tag does not prevent significant zooming on mobile devices',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<meta data-n-head="ssr" data-hid="viewport" name="viewport" content="width=device-width,initial-scale=1">',
        target: ['meta[data-hid="viewport"]'],
      },
    ],
  },
  {
    id: 'meta-viewport',
    impact: null,
    tags: ['cat.sensory-and-visual-cues', 'wcag2aa', 'wcag144', 'ACT'],
    description:
      'Ensures <meta name="viewport"> does not disable text scaling and zooming',
    help: 'Zooming and scaling must not be disabled',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/meta-viewport?application=axe-puppeteer',
    nodes: [
      {
        any: [
          {
            id: 'meta-viewport',
            data: null,
            relatedNodes: [],
            impact: 'critical',
            message: '<meta> tag does not disable zooming on mobile devices',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<meta data-n-head="ssr" data-hid="viewport" name="viewport" content="width=device-width,initial-scale=1">',
        target: ['meta[data-hid="viewport"]'],
      },
    ],
  },
  {
    id: 'nested-interactive',
    impact: null,
    tags: ['cat.keyboard', 'wcag2a', 'wcag412', 'TTv5', 'TT6.a'],
    description:
      'Ensures interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies',
    help: 'Interactive controls must not be nested',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/nested-interactive?application=axe-puppeteer',
    nodes: [
      {
        any: [
          {
            id: 'no-focusable-content',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'Element does not have focusable descendants',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<button data-v-f9cdd344="" class="link link--no-decoration info-bar__close">\n    Ok, close\n  </button>',
        target: ['.link'],
      },
      {
        any: [
          {
            id: 'no-focusable-content',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'Element does not have focusable descendants',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<button type="button" aria-label="Skip navigation" class="button scroll__button scroll__button--visually-hidden null" data-v-d354ce36="">\n      Skip navigation\n    </button>',
        target: ['.scroll__button--visually-hidden'],
      },
      {
        any: [
          {
            id: 'no-focusable-content',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'Element does not have focusable descendants',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<button type="button" aria-haspopup="true" aria-expanded="false" class="navigation__item navigation__link navigation__button">',
        target: [
          '.navigation__item:nth-child(2) > .navigation__button[aria-haspopup="true"][type="button"]',
        ],
      },
      {
        any: [
          {
            id: 'no-focusable-content',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'Element does not have focusable descendants',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<button type="button" aria-haspopup="true" aria-expanded="false" class="navigation__item navigation__link navigation__button">',
        target: [
          '.navigation__item:nth-child(3) > .navigation__button[aria-haspopup="true"][type="button"]',
        ],
      },
      {
        any: [
          {
            id: 'no-focusable-content',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'Element does not have focusable descendants',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<button type="button" aria-haspopup="true" aria-expanded="false" class="navigation__item navigation__link navigation__button">',
        target: [
          '.navigation__item:nth-child(5) > .navigation__button[aria-haspopup="true"][type="button"]',
        ],
      },
      {
        any: [
          {
            id: 'no-focusable-content',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'Element does not have focusable descendants',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<img src="/_nuxt/image/65f9ce.webp" width="768" height="672" alt="Woman is using Magento Kiosk app" loading="lazy" class="about-block__picture" data-v-f04dc4e2="">',
        target: ['img[src$="65f9ce.webp"]'],
      },
      {
        any: [
          {
            id: 'no-focusable-content',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'Element does not have focusable descendants',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<img src="/_nuxt/image/705253.webp" width="896" height="720" alt="Nobleplace store" loading="lazy" class="about-block__picture" data-v-f04dc4e2="">',
        target: ['img[src="/_nuxt/image/705253.webp"]'],
      },
      {
        any: [
          {
            id: 'no-focusable-content',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'Element does not have focusable descendants',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<img src="/_nuxt/image/457137.webp" width="768" height="640" alt="Bartek is drawing a plan" loading="lazy" class="about-block__picture" data-v-f04dc4e2="">',
        target: ['img[src="/_nuxt/image/457137.webp"]'],
      },
      {
        any: [
          {
            id: 'no-focusable-content',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'Element does not have focusable descendants',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<button type="button" class="button scroll__button scroll-top" data-v-d354ce36="">',
        target: ['.scroll-top'],
      },
      {
        any: [
          {
            id: 'no-focusable-content',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'Element does not have focusable descendants',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<img src="/_nuxt/image/038ceb.webp" width="127" height="54" alt="European Funds - regional program - logo" loading="lazy" img-class="footer__image" class="footer__image" data-v-f04dc4e2="">',
        target: ['img[src$="038ceb.webp"]'],
      },
      {
        any: [
          {
            id: 'no-focusable-content',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'Element does not have focusable descendants',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<img src="/_nuxt/image/759b07.webp" width="189" height="54" alt="European Union Development Fund - logo" loading="lazy" img-class="footer__image" class="footer__image" data-v-f04dc4e2="">',
        target: ['img[src$="759b07.webp"]'],
      },
      {
        any: [
          {
            id: 'no-focusable-content',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'Element does not have focusable descendants',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<img src="/_nuxt/image/4607a0.webp" width="135" height="54" alt="Great Poland Region - logo" loading="lazy" img-class="footer__image" class="footer__image" data-v-f04dc4e2="">',
        target: ['img[src$="4607a0.webp"]'],
      },
    ],
  },
  {
    id: 'page-has-heading-one',
    impact: null,
    tags: ['cat.semantics', 'best-practice'],
    description:
      'Ensure that the page, or at least one of its frames contains a level-one heading',
    help: 'Page should contain a level-one heading',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/page-has-heading-one?application=axe-puppeteer',
    nodes: [
      {
        any: [],
        all: [
          {
            id: 'page-has-heading-one',
            data: null,
            relatedNodes: [
              {
                html: '<h1 class="main-top__title" data-v-2b668d06="">We help you grow \n beyond eCommerce</h1>',
                target: ['.main-top__title'],
              },
              {
                html: '<h1 class="about-block__heading heading--border">\n        Transform your eCommerce\n      </h1>',
                target: [
                  '.about-block.aos-init[data-aos="fade-up"]:nth-child(2) > .about-block__text > .about-block__inner > .about-block__heading.heading--border',
                ],
              },
              {
                html: '<h1 class="about-block__heading heading--border">\n        We elevate customer experiences\n      </h1>',
                target: [
                  '.about-block.aos-init[data-aos="fade-up"]:nth-child(3) > .about-block__text > .about-block__inner > .about-block__heading.heading--border',
                ],
              },
              {
                html: '<h1 class="about-block__heading heading--border">\n        Join Snowdog\n      </h1>',
                target: [
                  '.about-block.aos-init[data-aos="fade-up"]:nth-child(4) > .about-block__text > .about-block__inner > .about-block__heading.heading--border',
                ],
              },
            ],
            impact: 'moderate',
            message: 'Page has at least one level-one heading',
          },
        ],
        none: [],
        impact: null,
        html: '<html lang="en" data-n-head="%7B%22lang%22:%7B%22ssr%22:%22en%22%7D%7D" class="js-focus-visible" data-js-focus-visible="">',
        target: ['html'],
      },
    ],
  },
  {
    id: 'region',
    impact: null,
    tags: ['cat.keyboard', 'best-practice'],
    description: 'Ensures all page content is contained by landmarks',
    help: 'All page content should be contained by landmarks',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/region?application=axe-puppeteer',
    nodes: [
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<div id="__nuxt">',
        target: ['#__nuxt'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<div id="__layout">',
        target: ['#__layout'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<div class="content-container content-container--background" data-v-ebb4d8dc="">',
        target: ['.content-container'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<section data-v-f9cdd344="" data-v-ebb4d8dc="" aria-label="Cookie privacy" class="info-bar info-bar__cookies">',
        target: ['.info-bar'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<span data-v-f9cdd344="" class="info-bar__text">\n    This site requires cookies to realize our services in accord with\n    <a data-v-f9cdd344="" href="/privacy" class="info-bar__link">\n      our cookies policy\n    </a></span>',
        target: ['.info-bar__text'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<a data-v-f9cdd344="" href="/privacy" class="info-bar__link">\n      our cookies policy\n    </a>',
        target: ['.info-bar__link'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<button data-v-f9cdd344="" class="link link--no-decoration info-bar__close">\n    Ok, close\n  </button>',
        target: ['.link'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<header class="header" data-v-ebb4d8dc="">',
        target: ['header'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<section class="scroll" data-v-d354ce36=""><button type="button" aria-label="Skip navigation" class="button scroll__button scroll__button--visually-hidden null" data-v-d354ce36="">\n      Skip navigation\n    </button></section>',
        target: ['header > .scroll[data-v-d354ce36=""]'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<button type="button" aria-label="Skip navigation" class="button scroll__button scroll__button--visually-hidden null" data-v-d354ce36="">\n      Skip navigation\n    </button>',
        target: ['.scroll__button--visually-hidden'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<a href="/" aria-current="page" aria-label="Snowdog Homepage" class="nuxt-link-exact-active nuxt-link-active logo link--no-decoration" data-v-764a8d53="">',
        target: ['.nuxt-link-exact-active'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<svg width="186" height="32" viewBox="0 10 282 58" xmlns="http://www.w3.org/2000/svg" data-v-764a8d53="" class="">',
        target: ['svg[width="186"]'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<path d="M28.584 57.545c.06 0 .117.018.166.052l.048.04 1.572 1.609c.069.07.1.17.084.266l-.021.072-1.645 3.922a.306.306 0 0 1-.207.176l-.07.009h-4.4a.3.3 0 0 1-.241-.125l-.035-.063-1.636-3.923a.32.32 0 0 1 .02-.28l.043-.058 1.563-1.608a.318.318 0 0 1 .154-.082l.059-.007h4.546zm14.353-40.878a.298.298 0 0 1 .294.217l9.39 32.804a.3.3 0 0 1-.203.371c-1.47.425-2.878.996-4.208 1.692a22.995 22.995 0 0 0-8.815 8.171l-.254.417-6.102 3.052a.3.3 0 0 1-.418-.368A27.754 27.754 0 0 1 46.633 47.15a.3.3 0 0 0 .157-.351l-2.342-8.174a.307.307 0 0 0-.047-.093l-3.305-4.547a.301.301 0 0 1 .244-.478h1.24c.2 0 .344-.19.29-.384l-3.09-10.778a.3.3 0 0 0-.392-.2 10.839 10.839 0 0 0-4.802 3.54 10.789 10.789 0 0 0-2.062 4.57.3.3 0 0 1-.294.244H20.404a.3.3 0 0 1-.294-.244 10.789 10.789 0 0 0-2.062-4.57 10.864 10.864 0 0 0-4.802-3.54.3.3 0 0 0-.391.2L9.764 33.124a.302.302 0 0 0 .29.384h1.24a.3.3 0 0 1 .244.478l-3.305 4.547a.35.35 0 0 0-.047.093L5.844 46.8c-.04.14.026.287.157.35a27.765 27.765 0 0 1 14.012 15.872c.087.255-.18.489-.418.369l-6.102-3.052a22.948 22.948 0 0 0-9.07-8.588 22.497 22.497 0 0 0-4.207-1.692.299.299 0 0 1-.204-.371l9.404-32.804a.298.298 0 0 1 .294-.217c1.587.023 3.121.284 4.562.745a15.687 15.687 0 0 1 9.303 8.11c.05.104.154.167.27.167h4.957c.113 0 .22-.067.27-.167a15.687 15.687 0 0 1 9.304-8.11c1.44-.464 2.97-.722 4.561-.745zm230.317 36.315a.3.3 0 0 1 .301.302v4.227a.3.3 0 0 1-.301.302h-19.887a.3.3 0 0 1-.302-.302v-4.227a.3.3 0 0 1 .302-.302h19.887zM110.24 28.832c5.889 0 10.683 4.702 10.844 10.565l.003.302v10.566a.3.3 0 0 1-.301.302h-4.219a.3.3 0 0 1-.301-.302V39.7c0-3.334-2.699-6.038-6.026-6.038h-9.34a.3.3 0 0 0-.302.302l.02 16.302a.3.3 0 0 1-.3.302h-4.24a.3.3 0 0 1-.3-.302V29.133a.3.3 0 0 1 .3-.302h14.163zm46.791 0c.102 0 .195.05.25.133l.035.067 5.072 14.105c.084.239.396.263.529.072l.037-.072 5.065-14.105a.304.304 0 0 1 .21-.191l.075-.01h4.396c.101 0 .195.052.25.134l.034.067 5.072 14.105c.085.239.397.263.53.072l.036-.072 5.069-14.105a.295.295 0 0 1 .207-.191l.074-.01h4.182c.187 0 .322.165.3.34l-.016.066-7.616 21.132a.305.305 0 0 1-.21.189l-.075.01h-4.4a.302.302 0 0 1-.25-.135l-.034-.067-5.069-14.105c-.084-.238-.396-.262-.528-.071l-.037.071-5.07 14.105a.304.304 0 0 1-.21.192l-.074.01h-4.399a.302.302 0 0 1-.25-.132l-.035-.067-7.616-21.132a.305.305 0 0 1 .218-.398l.066-.008h4.182zm59.264-9.243.009.071v30.605a.3.3 0 0 1-.232.294l-.07.008h-15.367c-5.966 0-10.81-4.83-10.848-10.8-.036-5.92 4.76-10.78 10.633-10.932l.285-.004h10.476a.3.3 0 0 0 .294-.232l.008-.07v-6.755c0-.092.04-.178.11-.234l.057-.035 4.218-2.113a.3.3 0 0 1 .427.197zm-75.924 9.242c5.99 0 10.848 4.867 10.848 10.868 0 5.904-4.703 10.711-10.559 10.864l-.289.004h-4.82c-5.99 0-10.848-4.867-10.848-10.868 0-5.904 4.702-10.71 10.558-10.864l.29-.004h4.82zm95.217 0c5.99 0 10.847 4.867 10.847 10.868 0 5.904-4.702 10.711-10.558 10.864l-.289.004h-4.821c-5.99 0-10.848-4.867-10.848-10.868 0-5.904 4.703-10.71 10.559-10.864l.289-.004h4.821zm-147.532 0a.3.3 0 0 1 .268.436l-2.11 4.227a.302.302 0 0 1-.267.167H70.795c-.995 0-1.822.792-1.835 1.785a1.81 1.81 0 0 0 1.808 1.838h13.56c3.652 0 6.618 2.962 6.628 6.625.01 3.663-3.03 6.658-6.686 6.658H65.344a.3.3 0 0 1-.301-.302V46.04a.3.3 0 0 1 .301-.302H84.3c.995 0 1.822-.792 1.835-1.784a1.81 1.81 0 0 0-1.808-1.839h-13.56a6.617 6.617 0 0 1-1.954-.295 6.64 6.64 0 0 1-4.674-6.383c.02-3.663 3.026-6.605 6.682-6.605h17.236zm191.638 0a.3.3 0 0 1 .294.368l-.026.068-2.11 4.227a.295.295 0 0 1-.2.16l-.067.007h-2.3a.3.3 0 0 0-.258.457 10.812 10.812 0 0 1 1.54 5.618c-.02 5.904-4.77 10.675-10.628 10.828l-.29.003h-4.75c-5.966 0-10.81-4.83-10.848-10.8-.036-5.92 4.76-10.78 10.633-10.932l.285-.004h18.725zm-264.86 12.97 6.612 2.491a.301.301 0 0 1 .194.282v3.586c0 .211-.21.356-.408.282l-6.612-2.491a.301.301 0 0 1-.194-.282v-3.586c0-.211.211-.356.408-.282zm23.63.214.008.068v3.586c0 .1-.049.192-.129.248l-.065.034-6.612 2.49a.302.302 0 0 1-.4-.213l-.007-.068v-3.586c0-.1.049-.192.128-.248l.065-.034 6.612-2.49a.302.302 0 0 1 .4.213zm172.717-8.354h-10.546c-3.324 0-6.02 2.697-6.026 6.028-.007 3.252 2.631 5.924 5.85 6.044l.226.004h10.496a.3.3 0 0 0 .294-.232l.008-.07V33.963a.3.3 0 0 0-.302-.302zm-70.81 0h-4.82c-3.329 0-6.027 2.704-6.027 6.038a6.033 6.033 0 0 0 5.8 6.034l.226.004h4.821c3.328 0 6.027-2.704 6.027-6.038s-2.699-6.038-6.027-6.038zm95.217 0h-4.821c-3.328 0-6.026 2.704-6.026 6.038a6.033 6.033 0 0 0 5.8 6.034l.226.004h4.821c3.328 0 6.026-2.704 6.026-6.038s-2.698-6.038-6.026-6.038zm30.082 0h-4.77c-3.325 0-6.02 2.697-6.027 6.028-.006 3.252 2.632 5.924 5.851 6.044l.226.004h4.77c3.325 0 6.02-2.697 6.027-6.028.007-3.327-2.755-6.048-6.076-6.048z" fill="#020C14" data-v-764a8d53="">',
        target: ['path[fill="#020C14"]'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<nav class="navigation">',
        target: ['nav'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<ul tabindex="-1" class="navigation__list">',
        target: ['.navigation__list'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<li class="navigation__item"><a href="/our-work" class="navigation__link"><span class="navigation__underscore">\n          Our Work\n        </span></a></li>',
        target: ['.navigation__list > .navigation__item:nth-child(1)'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<a href="/our-work" class="navigation__link"><span class="navigation__underscore">\n          Our Work\n        </span></a>',
        target: ['a[href$="our-work"]'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<span class="navigation__underscore">\n          Our Work\n        </span>',
        target: ['a[href$="our-work"] > .navigation__underscore'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<li class="navigation__item">',
        target: ['.navigation__item:nth-child(2)'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<button type="button" aria-haspopup="true" aria-expanded="false" class="navigation__item navigation__link navigation__button">',
        target: [
          '.navigation__item:nth-child(2) > .navigation__button[aria-haspopup="true"][type="button"]',
        ],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<span class="navigation__underscore">\n            Services\n          </span>',
        target: [
          '.navigation__item:nth-child(2) > .navigation__button[aria-haspopup="true"][type="button"] > .navigation__underscore',
        ],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 7" class="navigation__dropdown-icon"><path fill-rule="evenodd" d="M11.68 1.77L6.72 6.7c-.4.4-1.08.4-1.5 0L.28 1.78C-.12 1.38-.12.7.28.3c.4-.4 1.07-.4 1.5 0l4.2 4.18L10.2.3c.4-.4 1.07-.4 1.48 0 .4.4.4 1.07 0 1.48z"></path></svg>',
        target: [':root'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<path fill-rule="evenodd" d="M11.68 1.77L6.72 6.7c-.4.4-1.08.4-1.5 0L.28 1.78C-.12 1.38-.12.7.28.3c.4-.4 1.07-.4 1.5 0l4.2 4.18L10.2.3c.4-.4 1.07-.4 1.48 0 .4.4.4 1.07 0 1.48z"></path>',
        target: [':root > path[fill-rule="evenodd"]'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<li class="navigation__item">',
        target: ['.navigation__item:nth-child(3)'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<button type="button" aria-haspopup="true" aria-expanded="false" class="navigation__item navigation__link navigation__button">',
        target: [
          '.navigation__item:nth-child(3) > .navigation__button[aria-haspopup="true"][type="button"]',
        ],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<span class="navigation__underscore">\n            Lab\n          </span>',
        target: [
          '.navigation__item:nth-child(3) > .navigation__button[aria-haspopup="true"][type="button"] > .navigation__underscore',
        ],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 7" class="navigation__dropdown-icon"><path fill-rule="evenodd" d="M11.68 1.77L6.72 6.7c-.4.4-1.08.4-1.5 0L.28 1.78C-.12 1.38-.12.7.28.3c.4-.4 1.07-.4 1.5 0l4.2 4.18L10.2.3c.4-.4 1.07-.4 1.48 0 .4.4.4 1.07 0 1.48z"></path></svg>',
        target: [':root'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<path fill-rule="evenodd" d="M11.68 1.77L6.72 6.7c-.4.4-1.08.4-1.5 0L.28 1.78C-.12 1.38-.12.7.28.3c.4-.4 1.07-.4 1.5 0l4.2 4.18L10.2.3c.4-.4 1.07-.4 1.48 0 .4.4.4 1.07 0 1.48z"></path>',
        target: [':root > path[fill-rule="evenodd"]'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<li class="navigation__item"><a href="/blog" class="navigation__link"><span class="navigation__underscore">\n          Blog\n        </span></a></li>',
        target: ['.navigation__item:nth-child(4)'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<a href="/blog" class="navigation__link"><span class="navigation__underscore">\n          Blog\n        </span></a>',
        target: ['a[href$="blog"]'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<span class="navigation__underscore">\n          Blog\n        </span>',
        target: ['a[href$="blog"] > .navigation__underscore'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<li class="navigation__item">',
        target: ['.navigation__item:nth-child(5)'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<button type="button" aria-haspopup="true" aria-expanded="false" class="navigation__item navigation__link navigation__button">',
        target: [
          '.navigation__item:nth-child(5) > .navigation__button[aria-haspopup="true"][type="button"]',
        ],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<span class="navigation__underscore">\n            Join us\n          </span>',
        target: [
          '.navigation__item:nth-child(5) > .navigation__button[aria-haspopup="true"][type="button"] > .navigation__underscore',
        ],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 7" class="navigation__dropdown-icon"><path fill-rule="evenodd" d="M11.68 1.77L6.72 6.7c-.4.4-1.08.4-1.5 0L.28 1.78C-.12 1.38-.12.7.28.3c.4-.4 1.07-.4 1.5 0l4.2 4.18L10.2.3c.4-.4 1.07-.4 1.48 0 .4.4.4 1.07 0 1.48z"></path></svg>',
        target: [':root'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<path fill-rule="evenodd" d="M11.68 1.77L6.72 6.7c-.4.4-1.08.4-1.5 0L.28 1.78C-.12 1.38-.12.7.28.3c.4-.4 1.07-.4 1.5 0l4.2 4.18L10.2.3c.4-.4 1.07-.4 1.48 0 .4.4.4 1.07 0 1.48z"></path>',
        target: [':root > path[fill-rule="evenodd"]'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<li class="navigation__item"><a href="/contact" class="navigation__link"><span class="navigation__underscore">\n          Contact\n        </span></a></li>',
        target: ['.navigation__item:nth-child(6)'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<a href="/contact" class="navigation__link"><span class="navigation__underscore">\n          Contact\n        </span></a>',
        target: ['.navigation__link[href$="contact"]'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<span class="navigation__underscore">\n          Contact\n        </span>',
        target: [
          '.navigation__link[href$="contact"] > .navigation__underscore',
        ],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<div class="navigation__container">',
        target: ['.navigation__container'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<a href="/eu-funded-projects" aria-label="Machine Learning" class="navigation__link">',
        target: ['a[href$="eu-funded-projects"]'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 32" class="navigation__eu-icon">',
        target: ['.navigation__eu-icon'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<g fill="none" fill-rule="evenodd">',
        target: ['g'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<path d="M-7-8h49v48H-7z"></path>',
        target: ['path[d="M-7-8h49v48H-7z"]'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<path fill="#039" d="M0 23.16h34.669V0H0z"></path>',
        target: ['path[fill="#039"]'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<path fill="#FC0" d="M16.596 5.048l.733-.536.73.536-.279-.865.744-.535h-.916l-.28-.876-.279.876h-.919l.742.535zM12.81 6.066l.732-.536.731.536-.279-.865.744-.535h-.916l-.281-.878-.28.88-.914-.002.742.535zm-2.04.505l-.28.879-.915-.002.742.536-.278.864.731-.533.734.533-.28-.864.744-.536h-.916zm-1.014 5.528l.729.538-.277-.865.744-.535h-.916l-.28-.878-.284.88-.914-.002.742.535-.277.865zm1.296 2.937l-.282-.875-.279.875h-.916l.741.538-.277.862.731-.535.733.535-.279-.862.744-.538zm2.774 2.781l-.28-.875-.282.878-.915-.003.744.536-.277.864.73-.535.733.535-.278-.864.743-.536zm3.782 1.008l-.28-.878-.28.878h-.917l.744.534-.28.866.733-.536.733.536-.281-.866.747-.534zm3.782-1.008l-.282-.875-.282.878-.912-.003.74.536-.277.864.73-.535.734.535-.28-.864.747-.536zm2.776-2.781l-.282-.875-.279.875h-.915l.743.538-.282.862.733-.535.733.535-.28-.862.745-.538zm1.919-3.81h-.916l-.277-.878-.284.878h-.913l.743.535-.282.865.736-.535.73.535-.278-.865zm-2.934-2.391l.734-.532.733.532-.28-.864.744-.533h-.916l-.281-.88-.28.882-.914-.002.742.533zm-2.032-5.047l-.277.88-.919-.002.745.535-.278.867.734-.538.728.538-.277-.867.742-.535H21.4z">',
        target: ['path[fill="#FC0"]'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<path fill="#000" d="M0 27.518v3.349h2.262v-.517H.608v-.981h1.37v-.508H.608v-.826h1.539v-.517zm28.436 3.349h.812V28.34h-.812v2.527zm.9-3.267c0 .11-.05.197-.149.261a.623.623 0 01-.349.097.636.636 0 01-.355-.097.298.298 0 01-.148-.261c0-.113.05-.201.148-.266a.635.635 0 01.355-.096c.135 0 .251.032.35.096a.303.303 0 01.147.266zm2.052 1.938c0-.251-.053-.45-.161-.597a.527.527 0 00-.451-.22.528.528 0 00-.451.22c-.108.146-.162.346-.162.597 0 .255.054.456.162.604a.525.525 0 00.45.222.525.525 0 00.452-.222c.108-.148.161-.35.161-.604m.598 0c0 .2-.028.381-.086.546-.058.164-.14.304-.246.42a1.102 1.102 0 01-.383.271c-.15.065-.315.097-.495.097s-.344-.032-.492-.097a1.109 1.109 0 01-.381-.27 1.235 1.235 0 01-.249-.421 1.587 1.587 0 01-.089-.546c0-.2.03-.381.09-.544.059-.163.142-.302.25-.418a1.11 1.11 0 01.383-.268c.149-.063.311-.094.488-.094.176 0 .34.03.49.094.149.063.277.152.383.268.106.116.189.255.248.418.06.163.09.344.09.544m.573-1.117a3.996 3.996 0 011.038-.135c.205 0 .378.028.516.085a.803.803 0 01.504.604c.034.143.05.3.05.47v1.422h-.583v-1.33c0-.134-.009-.25-.026-.345a.614.614 0 00-.087-.232.347.347 0 00-.164-.13.688.688 0 00-.254-.041c-.074 0-.15.005-.231.014l-.179.024v2.04h-.583V28.42zM4.756 30.736a5.582 5.582 0 01-.439.09 3.55 3.55 0 01-.593.046 1.31 1.31 0 01-.509-.087.818.818 0 01-.328-.242.953.953 0 01-.176-.37 1.966 1.966 0 01-.053-.47v-1.417h.584v1.324c0 .27.04.464.118.58.079.116.216.174.412.174a2.547 2.547 0 00.401-.033v-2.045h.583v2.45zm2.152-1.87a1.898 1.898 0 00-.2-.05 1.472 1.472 0 00-.502-.008 1.283 1.283 0 00-.152.034v2.025h-.583V28.46c.112-.042.253-.081.422-.118.168-.037.356-.056.562-.056a2.387 2.387 0 01.555.087l-.102.493zm2.161.672c0-.251-.054-.45-.161-.597a.528.528 0 00-.452-.22.527.527 0 00-.45.22c-.108.146-.162.346-.162.597 0 .255.054.456.161.604a.525.525 0 00.451.222.526.526 0 00.452-.222c.107-.148.161-.35.161-.604m.598 0c0 .2-.029.381-.087.546-.057.164-.14.304-.246.42a1.107 1.107 0 01-.383.271c-.15.065-.315.097-.495.097s-.344-.032-.492-.097a1.109 1.109 0 01-.38-.27 1.241 1.241 0 01-.25-.421 1.595 1.595 0 01-.088-.546c0-.2.03-.381.089-.544a1.23 1.23 0 01.25-.418 1.11 1.11 0 01.384-.268c.148-.063.31-.094.487-.094s.34.03.49.094c.15.063.277.152.384.268.106.116.188.255.248.418.06.163.09.344.09.544m2.247.077c0-.26-.059-.464-.176-.609-.118-.145-.306-.217-.567-.217a2.02 2.02 0 00-.171.007.94.94 0 00-.176.031v1.446a.9.9 0 00.477.144c.213 0 .368-.072.466-.217.098-.145.147-.34.147-.585m.598-.01c0 .194-.025.371-.075.532-.05.161-.121.3-.214.416a.953.953 0 01-.35.27c-.14.065-.298.097-.475.097a1.216 1.216 0 01-.574-.14v.98h-.584v-3.338c.119-.033.265-.063.44-.092.173-.03.356-.044.549-.044.2 0 .378.03.535.092a1.114 1.114 0 01.659.679c.06.163.089.345.089.548m2.127-.309a.771.771 0 00-.033-.23.563.563 0 00-.1-.188.469.469 0 00-.383-.171.521.521 0 00-.407.183.601.601 0 00-.109.189c-.026.07-.043.143-.053.217h1.085zm-1.693.261c0-.222.033-.417.1-.585.065-.167.153-.307.262-.418a1.159 1.159 0 01.811-.336c.347 0 .618.108.812.324.195.216.292.538.292.967a3.323 3.323 0 01-.01.217H13.55c.016.203.088.36.215.471.127.112.311.167.552.167a1.81 1.81 0 00.666-.12l.077.478a.958.958 0 01-.132.05 1.999 1.999 0 01-.193.049 2.823 2.823 0 01-.49.051c-.222 0-.415-.033-.579-.1a1.078 1.078 0 01-.405-.275 1.131 1.131 0 01-.236-.415 1.695 1.695 0 01-.078-.525zm3.753.851c.18 0 .317-.01.41-.03v-.647a1.321 1.321 0 00-.538-.03.616.616 0 00-.178.054.326.326 0 00-.128.11.303.303 0 00-.048.175c0 .139.043.235.13.288a.67.67 0 00.352.08m-.048-2.18c.193 0 .356.024.487.072a.78.78 0 01.316.204.76.76 0 01.169.316c.034.124.05.26.05.408v1.532c-.09.02-.225.043-.407.07a4.13 4.13 0 01-.615.042c-.151 0-.29-.015-.415-.044a.866.866 0 01-.32-.14.658.658 0 01-.208-.251.87.87 0 01-.075-.382c0-.145.028-.268.085-.367a.697.697 0 01.229-.244.985.985 0 01.335-.136 1.871 1.871 0 01.827.012v-.096a.763.763 0 00-.024-.194.395.395 0 00-.244-.27.695.695 0 00-.248-.039 2.12 2.12 0 00-.646.097l-.073-.474a2.55 2.55 0 01.777-.116m1.708.193a4.013 4.013 0 011.037-.135c.206 0 .378.028.516.085a.803.803 0 01.504.604c.034.143.05.3.05.47v1.422h-.583v-1.33c0-.134-.009-.25-.027-.345a.608.608 0 00-.087-.232.346.346 0 00-.163-.13.686.686 0 00-.253-.041 1.9 1.9 0 00-.232.014l-.179.024v2.04h-.583V28.42zm5.204 2.451c-.228 0-.424-.033-.588-.1a1.089 1.089 0 01-.408-.277 1.13 1.13 0 01-.238-.42 1.734 1.734 0 01-.078-.532V27.45h.613v2.035c0 .151.017.28.05.389a.677.677 0 00.145.263.577.577 0 00.222.15.805.805 0 00.287.048.825.825 0 00.29-.048.568.568 0 00.224-.15.673.673 0 00.145-.263c.033-.108.05-.238.05-.39V27.45h.613v2.093c0 .193-.026.37-.08.531a1.08 1.08 0 01-.654.698c-.166.067-.364.1-.593.1m2.046-2.451a4.013 4.013 0 011.037-.135c.206 0 .378.028.516.085a.807.807 0 01.33.237.91.91 0 01.174.367c.034.143.05.3.05.47v1.422h-.583v-1.33c0-.134-.009-.25-.026-.345a.608.608 0 00-.087-.232.344.344 0 00-.164-.13.687.687 0 00-.253-.041 2.09 2.09 0 00-.232.014l-.179.024v2.04h-.583V28.42z">',
        target: ['path[fill="#000"]'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<main class="main-content" data-v-ebb4d8dc="">',
        target: ['main'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<div class="homepage" data-v-ebb4d8dc="">',
        target: ['.homepage'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<div class="main-top" data-v-2b668d06="">',
        target: ['.main-top'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<div class="main-top__wrapper" data-v-2b668d06="">',
        target: ['.main-top__wrapper'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<h1 class="main-top__title" data-v-2b668d06="">We help you grow \n beyond eCommerce</h1>',
        target: ['.main-top__title'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<p class="main-top__description" data-v-2b668d06="">Snowdog is a passionate community of developers, engineers, project managers and designers \n working at the pulse of digital technology and innovation. </p>',
        target: ['.main-top__description'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<div class="main-top__link" data-v-2b668d06=""><a href="/contact" class="button main-top__button" data-v-2b668d06="">\n        Get in touch\n      </a></div>',
        target: ['.main-top__link'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<a href="/contact" class="button main-top__button" data-v-2b668d06="">\n        Get in touch\n      </a>',
        target: ['.main-top__button'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<section data-aos="fade-up" class="about-block aos-init">',
        target: ['.about-block.aos-init[data-aos="fade-up"]:nth-child(2)'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<div class="about-block__image"><img src="/_nuxt/image/65f9ce.webp" width="768" height="672" alt="Woman is using Magento Kiosk app" loading="lazy" class="about-block__picture" data-v-f04dc4e2=""></div>',
        target: [
          '.about-block.aos-init[data-aos="fade-up"]:nth-child(2) > .about-block__image',
        ],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<img src="/_nuxt/image/65f9ce.webp" width="768" height="672" alt="Woman is using Magento Kiosk app" loading="lazy" class="about-block__picture" data-v-f04dc4e2="">',
        target: ['img[src$="65f9ce.webp"]'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<div class="about-block__text">',
        target: [
          '.about-block.aos-init[data-aos="fade-up"]:nth-child(2) > .about-block__text',
        ],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<div class="about-block__inner">',
        target: [
          '.about-block.aos-init[data-aos="fade-up"]:nth-child(2) > .about-block__text > .about-block__inner',
        ],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<h1 class="about-block__heading heading--border">\n        Transform your eCommerce\n      </h1>',
        target: [
          '.about-block.aos-init[data-aos="fade-up"]:nth-child(2) > .about-block__text > .about-block__inner > .about-block__heading.heading--border',
        ],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<p class="about-block__paragraph">',
        target: [
          '.about-block.aos-init[data-aos="fade-up"]:nth-child(2) > .about-block__text > .about-block__inner > .about-block__paragraph',
        ],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<div class="about-block__link"><a href="/unified-commerce" class="button about-block__button">\n          Unified Commerce Services\n        </a></div>',
        target: [
          '.about-block.aos-init[data-aos="fade-up"]:nth-child(2) > .about-block__text > .about-block__inner > .about-block__link',
        ],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<a href="/unified-commerce" class="button about-block__button">\n          Unified Commerce Services\n        </a>',
        target: ['a[href$="unified-commerce"]'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<section data-aos="fade-up" class="about-block aos-init">',
        target: ['.about-block.aos-init[data-aos="fade-up"]:nth-child(3)'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<div class="about-block__image"><img src="/_nuxt/image/705253.webp" width="896" height="720" alt="Nobleplace store" loading="lazy" class="about-block__picture" data-v-f04dc4e2=""></div>',
        target: [
          '.about-block.aos-init[data-aos="fade-up"]:nth-child(3) > .about-block__image',
        ],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<img src="/_nuxt/image/705253.webp" width="896" height="720" alt="Nobleplace store" loading="lazy" class="about-block__picture" data-v-f04dc4e2="">',
        target: ['img[src="/_nuxt/image/705253.webp"]'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<div class="about-block__text">',
        target: [
          '.about-block.aos-init[data-aos="fade-up"]:nth-child(3) > .about-block__text',
        ],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<div class="about-block__inner">',
        target: [
          '.about-block.aos-init[data-aos="fade-up"]:nth-child(3) > .about-block__text > .about-block__inner',
        ],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<h1 class="about-block__heading heading--border">\n        We elevate customer experiences\n      </h1>',
        target: [
          '.about-block.aos-init[data-aos="fade-up"]:nth-child(3) > .about-block__text > .about-block__inner > .about-block__heading.heading--border',
        ],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<p class="about-block__paragraph">',
        target: [
          '.about-block.aos-init[data-aos="fade-up"]:nth-child(3) > .about-block__text > .about-block__inner > .about-block__paragraph',
        ],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<section data-aos="fade-up" class="about-block aos-init">',
        target: ['.about-block.aos-init[data-aos="fade-up"]:nth-child(4)'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<div class="about-block__image"><img src="/_nuxt/image/457137.webp" width="768" height="640" alt="Bartek is drawing a plan" loading="lazy" class="about-block__picture" data-v-f04dc4e2=""></div>',
        target: [
          '.about-block.aos-init[data-aos="fade-up"]:nth-child(4) > .about-block__image',
        ],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<img src="/_nuxt/image/457137.webp" width="768" height="640" alt="Bartek is drawing a plan" loading="lazy" class="about-block__picture" data-v-f04dc4e2="">',
        target: ['img[src="/_nuxt/image/457137.webp"]'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<div class="about-block__text">',
        target: [
          '.about-block.aos-init[data-aos="fade-up"]:nth-child(4) > .about-block__text',
        ],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<div class="about-block__inner">',
        target: [
          '.about-block.aos-init[data-aos="fade-up"]:nth-child(4) > .about-block__text > .about-block__inner',
        ],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<h1 class="about-block__heading heading--border">\n        Join Snowdog\n      </h1>',
        target: [
          '.about-block.aos-init[data-aos="fade-up"]:nth-child(4) > .about-block__text > .about-block__inner > .about-block__heading.heading--border',
        ],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<p class="about-block__paragraph">',
        target: [
          '.about-block.aos-init[data-aos="fade-up"]:nth-child(4) > .about-block__text > .about-block__inner > .about-block__paragraph',
        ],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<div class="about-block__link"><a href="/career" class="button about-block__button">\n          Join us\n        </a></div>',
        target: [
          '.about-block.aos-init[data-aos="fade-up"]:nth-child(4) > .about-block__text > .about-block__inner > .about-block__link',
        ],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<a href="/career" class="button about-block__button">\n          Join us\n        </a>',
        target: ['a[href$="career"]'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<div class="container footer-container" data-v-ebb4d8dc="">',
        target: ['.container'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<section class="scroll" data-v-d354ce36="" data-v-ebb4d8dc="">',
        target: ['.container > .scroll[data-v-d354ce36=""]'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<button type="button" class="button scroll__button scroll-top" data-v-d354ce36="">',
        target: ['.scroll-top'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 80" class="scroll-top__icon"><path fill-rule="evenodd" d="M16.6 9a1.4 1.4 0 01-2 0l-4.2-4v73.6c0 .8-.7 1.4-1.4 1.4-.8 0-1.4-.6-1.4-1.4V5L3.4 9a1.4 1.4 0 01-2 0 1.4 1.4 0 010-2L8 .5a1.4 1.4 0 012 0L16.6 7c.5.7.5 1.6 0 2z"></path></svg>',
        target: ['.scroll-top__icon'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<path fill-rule="evenodd" d="M16.6 9a1.4 1.4 0 01-2 0l-4.2-4v73.6c0 .8-.7 1.4-1.4 1.4-.8 0-1.4-.6-1.4-1.4V5L3.4 9a1.4 1.4 0 01-2 0 1.4 1.4 0 010-2L8 .5a1.4 1.4 0 012 0L16.6 7c.5.7.5 1.6 0 2z"></path>',
        target: ['.scroll-top__icon > path[fill-rule="evenodd"]'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<span class="scroll-top__text">\n    Up\n  </span>',
        target: ['.scroll-top__text'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<footer class="footer" data-v-ebb4d8dc="">',
        target: ['footer'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<ul class="footer__menu">',
        target: ['.footer__menu'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<li class="footer__item"><a href="/privacy" class="footer__link link--no-decoration">\n        Privacy policy\n      </a></li>',
        target: ['.footer__item:nth-child(1)'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<a href="/privacy" class="footer__link link--no-decoration">\n        Privacy policy\n      </a>',
        target: ['.footer__link.link--no-decoration[href$="privacy"]'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<li class="footer__item"><a href="https://www.facebook.com/snowdogpl/" target="_blank" rel="noopener" class="footer__link link--no-decoration">\n        Facebook\n      </a></li>',
        target: ['.footer__item:nth-child(2)'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<a href="https://www.facebook.com/snowdogpl/" target="_blank" rel="noopener" class="footer__link link--no-decoration">\n        Facebook\n      </a>',
        target: [
          '.footer__item:nth-child(2) > .footer__link[target="_blank"][rel="noopener"]',
        ],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<li class="footer__item"><a href="https://twitter.com/SnowdogApps" target="_blank" rel="noopener" class="footer__link link--no-decoration">\n        Twitter\n      </a></li>',
        target: ['.footer__item:nth-child(3)'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<a href="https://twitter.com/SnowdogApps" target="_blank" rel="noopener" class="footer__link link--no-decoration">\n        Twitter\n      </a>',
        target: [
          '.footer__item:nth-child(3) > .footer__link[target="_blank"][rel="noopener"]',
        ],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<li class="footer__item"><a href="https://github.com/SnowdogApps" target="_blank" rel="noopener" class="footer__link link--no-decoration">\n        Github\n      </a></li>',
        target: ['.footer__item:nth-child(4)'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<a href="https://github.com/SnowdogApps" target="_blank" rel="noopener" class="footer__link link--no-decoration">\n        Github\n      </a>',
        target: ['.footer__item:nth-child(4) > a[href$="SnowdogApps"]'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<li class="footer__item"><a href="/accessibility-statement" target="_blank" rel="noopener" class="footer__link link--no-decoration">\n        Accessibility statement\n      </a></li>',
        target: ['.footer__item:nth-child(5)'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<a href="/accessibility-statement" target="_blank" rel="noopener" class="footer__link link--no-decoration">\n        Accessibility statement\n      </a>',
        target: ['a[href$="accessibility-statement"]'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<section aria-label="Contact information" class="footer__contact">',
        target: ['.footer__contact'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<h2 class="footer__contact-heading">\n      Contact\n    </h2>',
        target: ['h2'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<div class="footer__contact-item">\n      Mostowa 11\n    </div>',
        target: ['.footer__contact-item:nth-child(2)'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<div class="footer__contact-item">\n      61-854 Poznań\n    </div>',
        target: ['.footer__contact-item:nth-child(3)'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<div class="footer__contact-item">\n      Poland\n    </div>',
        target: ['.footer__contact-item:nth-child(4)'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<div class="footer__mail-item"><a href="mailto:hello@snow.dog" aria-label="mail: hello@snow.dog">\n        hello@snow.dog\n      </a></div>',
        target: ['.footer__mail-item'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<a href="mailto:hello@snow.dog" aria-label="mail: hello@snow.dog">\n        hello@snow.dog\n      </a>',
        target: ['a[href$="mailto:hello@snow.dog"]'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<div class="footer__logos">',
        target: ['.footer__logos'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<div class="footer__image-container"><img src="/_nuxt/image/038ceb.webp" width="127" height="54" alt="European Funds - regional program - logo" loading="lazy" img-class="footer__image" class="footer__image" data-v-f04dc4e2=""></div>',
        target: ['.footer__image-container:nth-child(1)'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<img src="/_nuxt/image/038ceb.webp" width="127" height="54" alt="European Funds - regional program - logo" loading="lazy" img-class="footer__image" class="footer__image" data-v-f04dc4e2="">',
        target: ['img[src$="038ceb.webp"]'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<div class="footer__image-container"><img src="/_nuxt/image/759b07.webp" width="189" height="54" alt="European Union Development Fund - logo" loading="lazy" img-class="footer__image" class="footer__image" data-v-f04dc4e2=""></div>',
        target: ['.footer__image-container:nth-child(2)'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<img src="/_nuxt/image/759b07.webp" width="189" height="54" alt="European Union Development Fund - logo" loading="lazy" img-class="footer__image" class="footer__image" data-v-f04dc4e2="">',
        target: ['img[src$="759b07.webp"]'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<div class="footer__image-container"><img src="/_nuxt/image/4607a0.webp" width="135" height="54" alt="Great Poland Region - logo" loading="lazy" img-class="footer__image" class="footer__image" data-v-f04dc4e2=""></div>',
        target: ['.footer__image-container:nth-child(3)'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<img src="/_nuxt/image/4607a0.webp" width="135" height="54" alt="Great Poland Region - logo" loading="lazy" img-class="footer__image" class="footer__image" data-v-f04dc4e2="">',
        target: ['img[src$="4607a0.webp"]'],
      },
      {
        any: [
          {
            id: 'region',
            data: {
              isIframe: false,
            },
            relatedNodes: [],
            impact: 'moderate',
            message: 'All page content is contained by landmarks',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<p class="footer__copyrights">\n    © 2006-2023 Snowdog\n  </p>',
        target: ['.footer__copyrights'],
      },
    ],
  },
  {
    id: 'tabindex',
    impact: null,
    tags: ['cat.keyboard', 'best-practice'],
    description: 'Ensures tabindex attribute values are not greater than 0',
    help: 'Elements should not have tabindex greater than zero',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/tabindex?application=axe-puppeteer',
    nodes: [
      {
        any: [
          {
            id: 'tabindex',
            data: null,
            relatedNodes: [],
            impact: 'serious',
            message: 'Element does not have a tabindex greater than 0',
          },
        ],
        all: [],
        none: [],
        impact: null,
        html: '<ul tabindex="-1" class="navigation__list">',
        target: ['.navigation__list'],
      },
    ],
  },
  {
    id: 'link-in-text-block',
    impact: 'serious',
    tags: ['cat.color', 'wcag2a', 'wcag141', 'TTv5', 'TT13.a'],
    description:
      'Ensure links are distinguished from surrounding text in a way that does not rely on color',
    help: 'Links must be distinguishable without relying on color',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.7/link-in-text-block?application=axe-puppeteer',
    nodes: [
      {
        any: [
          {
            id: 'link-in-text-block',
            data: {
              messageKey: 'fgContrast',
              contrastRatio: 1.06,
              requiredContrastRatio: 3,
              nodeColor: '#000000',
              parentColor: '#020c14',
            },
            relatedNodes: [
              {
                html: '<span data-v-f9cdd344="" class="info-bar__text">\n    This site requires cookies to realize our services in accord with\n    <a data-v-f9cdd344="" href="/privacy" class="info-bar__link">\n      our cookies policy\n    </a></span>',
                target: ['.info-bar__text'],
              },
            ],
            impact: 'serious',
            message:
              'The link has insufficient color contrast of 1.06:1 with the surrounding text. (Minimum contrast is 3:1, link text: #000000, surrounding text: #020c14)',
          },
          {
            id: 'link-in-text-block-style',
            data: null,
            relatedNodes: [
              {
                html: '<span data-v-f9cdd344="" class="info-bar__text">\n    This site requires cookies to realize our services in accord with\n    <a data-v-f9cdd344="" href="/privacy" class="info-bar__link">\n      our cookies policy\n    </a></span>',
                target: ['.info-bar__text'],
              },
            ],
            impact: 'serious',
            message:
              'The link has no styling (such as underline) to distinguish it from the surrounding text',
          },
        ],
        all: [],
        none: [],
        impact: 'serious',
        html: '<a data-v-f9cdd344="" href="/privacy" class="info-bar__link">\n      our cookies policy\n    </a>',
        target: ['.info-bar__link'],
      },
    ],
  },
]
