import React from "react";
import styles from "./FormControls.module.scss"

export const Textarea = (props) => {
    const hasError = props.meta.error && props.meta.touched;
    return(
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div><textarea {...props.input} /></div>
            { hasError && <span>{props.meta.error}</span>}
        </div>
    )
}

export const Input = (props) => {
    const hasError = props.meta.error && props.meta.touched;
    return(
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div><input {...props.input} /></div>
            { hasError && <span>{props.meta.error}</span>}
        </div>
    )
}
