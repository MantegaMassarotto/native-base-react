import { useFormik } from "formik";
import { Input, Stack, Box, Button as ButtonNB, IButtonProps, VStack } from "native-base";
import { memo, useCallback, useState } from "react";

type ButtonProps = IButtonProps & {
  onPress?: () => void;
  type?: string;
  title: string;
};

const Button = ({ type, title, onPress }: ButtonProps) => {

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore

    <ButtonNB onPress={onPress} type={type}>{title}</ButtonNB>
  );
};

const ButtonMemo = memo(Button);

const initialValues =  { email: '', password: '' }

function App() {

  const handleOnSubmit = useCallback(() => {
    console.log('submit')
  }, [])

  const { handleSubmit, handleChange, values } = useFormik({ initialValues, onSubmit: handleOnSubmit  })

  return (
    <Stack>
      <VStack>
        <form onSubmit={handleSubmit}>
          <Input 
            nativeID='email'
            placeholder='email'
            onChange={handleChange}
            value={values.email}
          />
          <Input 
            nativeID='password'
            placeholder='password'
            type="password"
            onChange={handleChange}
            value={values.password}
          />
        </form>
      </VStack>
      <Box alignItems="center">
        <ButtonMemo onPress={handleSubmit} title="On Press" />
      </Box>
    </Stack>
  );
}

export default App;
