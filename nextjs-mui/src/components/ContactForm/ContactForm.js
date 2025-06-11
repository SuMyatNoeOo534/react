"use client";
import {
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  FormHelperText,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validationSchema";

const CITIES = [
  { value: "yangon", label: "Yangon" },
  { value: "mandalay", label: "Mandalay" },
];

const TOWNSHIPS = {
  yangon: ["Hlaing", "Kamayut", "Bahan"],
  mandalay: ["Chanayethazan", "Amarapura", "Pyigyidagun"],
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      township: "",
    },
  });
//    const onSubmit = (formData) => {
//     console.log("formData", formData);
//     console.log("Name Input Data", formData.name);
//     reset();
    
//   };

  const selectedCity = watch("city");

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset();
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ p: 2, maxWidth: 500, mx: "auto" }}>
      <TextField
        label="Name"
        fullWidth
        sx={{ mb: 2 }}
        {...register("name")}
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      <TextField
        label="Email"
        fullWidth
        sx={{ mb: 2 }}
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <TextField
        label="Phone No."
        fullWidth
        sx={{ mb: 2 }}
        {...register("phone")}
        error={!!errors.phone}
        helperText={errors.phone?.message}
      />
      <TextField
        label="Address"
        fullWidth
        sx={{ mb: 2 }}
        {...register("address")}
        error={!!errors.address}
        helperText={errors.address?.message}
      />

      <FormControl fullWidth sx={{ mb: 2 }} error={!!errors.city}>
        <InputLabel id="city-label">City</InputLabel>
        <Controller
          name="city"
          control={control}
          render={({ field }) => (
            <Select {...field} labelId="city-label" label="City">
              {CITIES.map((city) => (
                <MenuItem key={city.value} value={city.value}>
                  {city.label}
                </MenuItem>
              ))}
            </Select>
          )}
        />
        <FormHelperText>{errors.city?.message}</FormHelperText>
      </FormControl>

      <FormControl fullWidth sx={{ mb: 2 }} error={!!errors.township}>
        <InputLabel id="township-label">Township</InputLabel>
        <Controller
          name="township"
          control={control}
          render={({ field }) => (
            <Select {...field} labelId="township-label" label="Township">
              {(TOWNSHIPS[selectedCity] || []).map((t, index) => (
                <MenuItem key={index} value={t}>
                  {t}
                </MenuItem>
              ))}
            </Select>
          )}
        />
        <FormHelperText>{errors.township?.message}</FormHelperText>
      </FormControl>

      <Button variant="contained" type="submit" fullWidth>
        Save
      </Button>
    </Box>
  );
}
