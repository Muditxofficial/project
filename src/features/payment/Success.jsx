import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button, Label, Icon, Input } from "semantic-ui-react";
const Success = () => {
  const [email, setEmail] = useState("");
  const templateParams = {
    to_name: `${email}`,
    to_email: `${email}`,
    message:
      "Hey There,Congrulations on unlocking the rewards section.Our team will review and while they do,please reply by choosing any reward u wish from leetcode subscription/netflix subscption for 7 days.",
  };
  const sendEmail = () => {
    emailjs
      .send(
        "service_8qtvxei",
        "template_vo82j9c",
        templateParams,
        process.env.REACT_APP_EMAIL_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  console.log(email);
  return (
    <div>
      <h1>Success</h1>
      <h2>Thank you for your purchase!</h2>

      <Label>
        <Icon name='mail' />
        Need Confirmation,type in email
      </Label>
      {/* <input
        data-testid='input'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /> */}
      <Input
        iconPosition='left'
        placeholder='Email'
        onChange={(e) => setEmail(e.target.value)}
        data-testid='input'
        value={email}>
        <Icon name='at' />
        <input />
      </Input>
      <Button onClick={sendEmail}>SendMail!!</Button>
    </div>
  );
};

export default Success;
