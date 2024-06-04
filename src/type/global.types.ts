export interface UserCreateInterface {
    email: string,
    password: string,
    confirmPassword: string,
    role: string,
    allowedFeature: [],
    details: {
        firstName: {
            en: string,
            ne: string,
        },
        lastName: {
            en: string,
            ne: string
        },
        phoneNumber: ""
    }
}

export interface UserInterface {
    id: string,
    email: string,
    password: string,
    role: string,
    allowedFeature: [],
    details: {
        firstName: {
            en: string,
            ne: string,
        },
        middleName: {
            en: string,
            ne: string
        },
        lastName: {
            en: string,
            ne: string
        },
        phoneNumber: ""
    },
    otpVerified: boolean,
    username: string,
    createdAt: string
}

