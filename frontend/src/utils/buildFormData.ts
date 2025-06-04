import type { FormState } from "../components/Forms/types";

export const buildFormData = (
    form: FormState,
    mode: "login" | "register"
)=>{
    const { email,password, name}= form;
    return mode === "register"?{email,password,name}:{email,password};
};