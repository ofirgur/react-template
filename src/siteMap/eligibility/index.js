export const isEligibleModule = user => module => {
    if(!user || !module) return;

    const { eligibility } = user;
    const { static, key } = module;
    if(!eligibility || !key) return;

    return static || eligibility[module.key];
};