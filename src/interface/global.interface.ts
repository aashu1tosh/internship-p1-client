export interface UserInterface {
    details: {
        firstName: {
            en: string,
            ne: string
        },
        middleName?: {
            en: string,
            ne: string
        },
        lastName: {
            en: string,
            ne: string,
        },
        phoneNumber: string
    }
    email: string,
    id: string,
    role: string,
    username: string,
}

export type UserType = UserInterface[]

export interface PaginationInterface {
    currentPage: number,
    perPage: number,
    total: number,
    totalPages: number
}

export const defaultPagination: PaginationInterface = {
    currentPage: 1,
    perPage: 10,
    totalPages: 1,
    total: 10
};

export interface UpdateAdminProps {
    id: string;
    closeDialog: () => void;
    user: UserInterface | undefined;
    handleUserUpdate: (updatedUser: UserInterface) => void;
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
        phoneNumber: string
    }
}
export interface SearchObject {
    search: string;
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
        middleName?: {
            en: string,
            ne: string
        },
        lastName: {
            en: string,
            ne: string
        },
        phoneNumber: string,
    },
    otpVerified: boolean,
    username: string,
    createdAt: string
}

