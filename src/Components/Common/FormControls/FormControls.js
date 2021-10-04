import React from "react";
import styles from "./FormControls.module.scss"

const FormControl = ({meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}

// Creating a unified form
// export const createField = (placeholder, name, validators, component, props = [], text = '') => {
//     return <div>
//         <Field placeholder
//                name
//                validate={validators}
//                component={component}
//                {...props}/> {text}
//     </div>
// }
