function MinimumLength(length: number) {
    return function (target: any, propertyKey: string, descriptor?: PropertyDescriptor) {
        const originalSet = descriptor?.set;

        descriptor = descriptor || {};
        descriptor.set = function (newValue: string) {
            if (newValue.length < length) {
                throw new Error(`The length of "${propertyKey}" should be at least ${length} characters.`);
            }
            if (originalSet) {
                originalSet.call(this, newValue);
            }
        };
    };
}

export { MinimumLength };
