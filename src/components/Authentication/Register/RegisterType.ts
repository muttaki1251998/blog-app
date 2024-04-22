export interface RegisterType {
    username: string;
    email: string;
    password: string;
}

export interface ErrorType {
    usernameError: string | null;
    emailError: string | null;
    passwordError: string | null;
}