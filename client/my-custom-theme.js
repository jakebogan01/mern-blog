
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
        name: 'my-custom-theme',
        properties: {
                // =~= Theme Properties =~=
                "--theme-font-family-base": `system-ui`,
                "--theme-font-family-heading": `system-ui`,
                "--theme-font-color-base": "var(--color-primary-50)",
                "--theme-font-color-dark": "255 255 255",
                "--theme-rounded-base": "9999px",
                "--theme-rounded-container": "8px",
                "--theme-border-base": "1px",
                // =~= Theme On-X Colors =~=
                "--on-primary": "0 0 0",
                "--on-secondary": "0 0 0",
                "--on-tertiary": "255 255 255",
                "--on-success": "0 0 0",
                "--on-warning": "0 0 0",
                "--on-error": "0 0 0",
                "--on-surface": "255 255 255",
                // =~= Theme Colors  =~=
                // primary | #32cef4
                "--color-primary-50": "224 248 253", // #e0f8fd
                "--color-primary-100": "214 245 253", // #d6f5fd
                "--color-primary-200": "204 243 252", // #ccf3fc
                "--color-primary-300": "173 235 251", // #adebfb
                "--color-primary-400": "112 221 247", // #70ddf7
                "--color-primary-500": "50 206 244", // #32cef4
                "--color-primary-600": "45 185 220", // #2db9dc
                "--color-primary-700": "38 155 183", // #269bb7
                "--color-primary-800": "30 124 146", // #1e7c92
                "--color-primary-900": "25 101 120", // #196578
                // secondary | #eab0c5
                "--color-secondary-50": "252 243 246", // #fcf3f6
                "--color-secondary-100": "251 239 243", // #fbeff3
                "--color-secondary-200": "250 235 241", // #faebf1
                "--color-secondary-300": "247 223 232", // #f7dfe8
                "--color-secondary-400": "240 200 214", // #f0c8d6
                "--color-secondary-500": "234 176 197", // #eab0c5
                "--color-secondary-600": "211 158 177", // #d39eb1
                "--color-secondary-700": "176 132 148", // #b08494
                "--color-secondary-800": "140 106 118", // #8c6a76
                "--color-secondary-900": "115 86 97", // #735661
                // tertiary | #656dc1
                "--color-tertiary-50": "232 233 246", // #e8e9f6
                "--color-tertiary-100": "224 226 243", // #e0e2f3
                "--color-tertiary-200": "217 219 240", // #d9dbf0
                "--color-tertiary-300": "193 197 230", // #c1c5e6
                "--color-tertiary-400": "147 153 212", // #9399d4
                "--color-tertiary-500": "101 109 193", // #656dc1
                "--color-tertiary-600": "91 98 174", // #5b62ae
                "--color-tertiary-700": "76 82 145", // #4c5291
                "--color-tertiary-800": "61 65 116", // #3d4174
                "--color-tertiary-900": "49 53 95", // #31355f
                // success | #26dccd
                "--color-success-50": "222 250 248", // #defaf8
                "--color-success-100": "212 248 245", // #d4f8f5
                "--color-success-200": "201 246 243", // #c9f6f3
                "--color-success-300": "168 241 235", // #a8f1eb
                "--color-success-400": "103 231 220", // #67e7dc
                "--color-success-500": "38 220 205", // #26dccd
                "--color-success-600": "34 198 185", // #22c6b9
                "--color-success-700": "29 165 154", // #1da59a
                "--color-success-800": "23 132 123", // #17847b
                "--color-success-900": "19 108 100", // #136c64
                // warning | #6aa317
                "--color-warning-50": "233 241 220", // #e9f1dc
                "--color-warning-100": "225 237 209", // #e1edd1
                "--color-warning-200": "218 232 197", // #dae8c5
                "--color-warning-300": "195 218 162", // #c3daa2
                "--color-warning-400": "151 191 93", // #97bf5d
                "--color-warning-500": "106 163 23", // #6aa317
                "--color-warning-600": "95 147 21", // #5f9315
                "--color-warning-700": "80 122 17", // #507a11
                "--color-warning-800": "64 98 14", // #40620e
                "--color-warning-900": "52 80 11", // #34500b
                // error | #db5ea0
                "--color-error-50": "250 231 241", // #fae7f1
                "--color-error-100": "248 223 236", // #f8dfec
                "--color-error-200": "246 215 231", // #f6d7e7
                "--color-error-300": "241 191 217", // #f1bfd9
                "--color-error-400": "230 142 189", // #e68ebd
                "--color-error-500": "219 94 160", // #db5ea0
                "--color-error-600": "197 85 144", // #c55590
                "--color-error-700": "164 71 120", // #a44778
                "--color-error-800": "131 56 96", // #833860
                "--color-error-900": "107 46 78", // #6b2e4e
                // surface | #21043f
                "--color-surface-50": "222 217 226", // #ded9e2
                "--color-surface-100": "211 205 217", // #d3cdd9
                "--color-surface-200": "200 192 207", // #c8c0cf
                "--color-surface-300": "166 155 178", // #a69bb2
                "--color-surface-400": "100 79 121", // #644f79
                "--color-surface-500": "33 4 63", // #21043f
                "--color-surface-600": "30 4 57", // #1e0439
                "--color-surface-700": "25 3 47", // #19032f
                "--color-surface-800": "20 2 38", // #140226
                "--color-surface-900": "16 2 31", // #10021f

        }
}