export interface UserInterface {
    details: {
        firstName: {
            en: string,
            ne: string
        },
        lastName: {
            en: string,
            ne: string,
        },
        phoneNumber: number
    }
    email: string,
    id: string,
    role: string,
    username: string,
}

export type UserType = UserInterface[]

export interface UpdateAdminProps {
    id: string;
    closeDialog: () => void;
    userData: UserType;
    setUserData: React.Dispatch<React.SetStateAction<UserInterface[]>>;
}

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

