export default interface Model {
    name: string;
    // Uncommenting this can cause the build to still be successful despite 'value' missing from an instance
    // After the first build all other builds will be correct though
    // value: string;
};
