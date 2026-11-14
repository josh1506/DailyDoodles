module.exports = {
    env: {browser: true, es2020: true},
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
    ],
    parserOptions: {ecmaVersion: 'latest', sourceType: 'module'},
    settings: {react: {version: '18.2'}},
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': 'warn',
        // Plain-JS project without PropTypes; adding the prop-types package isn't justified.
        'react/prop-types': 'off',
        // react-three-fiber props on <primitive>.
        'react/no-unknown-property': ['error', {ignore: ['object', 'position', 'rotation-y']}],
    },
    overrides: [
        {
            // Context providers intentionally export their use* hook alongside the component.
            files: ['src/services/reducers/**/*.jsx'],
            rules: {'react-refresh/only-export-components': 'off'},
        },
    ],
    globals: {
        process: true,
    },
};
