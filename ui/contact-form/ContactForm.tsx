import { Box, Grid, TextField, Snackbar } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useState, forwardRef } from "react";
import { Formik, Form } from "formik";
import {
  CONTACTFORMINTIALVALUES,
  CONTACTFORVALIDATIONSCHEMA,
} from "./ContactFormData";
import {
  MUIBORDERRADIUS15,
  MUITERTIARYCOLOR,
  MUITEXTFIELD,
} from "@/contants/variables";
import CircularProgress from "@mui/material/CircularProgress";
import GlobalButton from "../button/GlobalButton";

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const styles = {
  inputStyle: {
    "& input": { color: MUITEXTFIELD },
    "& textarea": { color: MUITEXTFIELD },
    "& fieldset": {
      borderColor: MUITEXTFIELD,
      borderRadius: MUIBORDERRADIUS15,
    },
    "& label": {
      color: MUITEXTFIELD,
    },
    "& label.Mui-focused": {
      color: MUITEXTFIELD,
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: MUITEXTFIELD,
      },
      "&:hover fieldset": {
        borderColor: MUITEXTFIELD,
      },
    },
  },
};

const ContactForm = () => {
  const [successSnackbar, setSuccessSnackbar] = useState(false);
  const [errorSnackbar, setErrorSnackbar] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <Box>
      <Formik
        initialValues={CONTACTFORMINTIALVALUES}
        validationSchema={CONTACTFORVALIDATIONSCHEMA}
        onSubmit={async (values, { resetForm }) => {
          // try {
          //   setLoading(true);
          //   await sendContactForm(values);
          //   resetForm();
          //   setSuccessSnackbar(true);
          //   setLoading(false);
          // } catch (error) {
          //   resetForm();
          //   setErrorSnackbar(true);
          //   setLoading(false);
          // }
        }}
      >
        {(formik) => (
          <Form>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                  label="Your Name"
                  variant="outlined"
                  sx={styles.inputStyle}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  label="Your Email"
                  variant="outlined"
                  sx={styles.inputStyle}
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} pt={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  error={formik.touched.phone && Boolean(formik.errors.phone)}
                  helperText={formik.touched.phone && formik.errors.phone}
                  label="Your Phone"
                  variant="outlined"
                  sx={styles.inputStyle}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  name="subject"
                  value={formik.values.subject}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.subject && Boolean(formik.errors.subject)
                  }
                  helperText={formik.touched.subject && formik.errors.subject}
                  label="Your Subject"
                  variant="outlined"
                  sx={styles.inputStyle}
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} pt={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.message && Boolean(formik.errors.message)
                  }
                  helperText={formik.touched.message && formik.errors.message}
                  multiline
                  rows={8}
                  label="Your Message Here"
                  variant="outlined"
                  sx={styles.inputStyle}
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} pt={3}>
              <Grid
                item
                xs={12}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"end"}
                gap={"10px"}
              >
                {loading && (
                  <CircularProgress
                    sx={{ color: MUITERTIARYCOLOR }}
                    size={20}
                  />
                )}
                <GlobalButton text="Submit" type="submit" disabled={loading} />
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
      <Snackbar
        open={successSnackbar}
        autoHideDuration={6000}
        onClose={() => setSuccessSnackbar(false)}
      >
        <Alert
          onClose={() => setSuccessSnackbar(false)}
          severity={"success"}
          sx={{ width: "100%" }}
        >
          Message has been sent successfully. We will reach you out as soon as
          possible.
        </Alert>
      </Snackbar>
      <Snackbar
        open={errorSnackbar}
        autoHideDuration={6000}
        onClose={() => setErrorSnackbar(false)}
      >
        <Alert
          onClose={() => setErrorSnackbar(false)}
          severity={"error"}
          sx={{ width: "100%" }}
        >
          Something went wrong! Please, try again later.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactForm;
