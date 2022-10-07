import { Input, Stack, Box, Button as ButtonNB, IButtonProps, VStack } from "native-base";
import { memo, useCallback, useState } from "react";

type ButtonProps = IButtonProps & {
  onPress?: () => void;
  type?: string;
  title: string;
};

const Button = ({ type, title, onPress }: ButtonProps) => {
  // const onPressIn = useCallback(() => {
  //   console.log('do');
  // }, []);

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore

    <ButtonNB onPress={onPress} type={type}>{title}</ButtonNB>
  );
};

const ButtonMemo = memo(Button);

function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOnChangeEmail = useCallback((e: any) => {
    setEmail(e.target.value);
  }, [])

  const handleOnChangePassword = useCallback((e: any) => {
    setPassword(e.target.value);
  }, [])

  return (
    <Stack>
      <VStack>
        <Input 
          nativeID='email'
          placeholder='email'
          onChange={handleOnChangeEmail}
          value={email}
        />
        <Input 
          nativeID='password'
          placeholder='password'
          type="password"
          onChange={handleOnChangePassword}
          value={password}
        />
      </VStack>
      <Box alignItems="center">
        <ButtonMemo onPress={() => console.log("hello world")} title="On Press" />
      </Box>
    </Stack>
  );
}

export default App;
