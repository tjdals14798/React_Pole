import React from "react";
import { useSelector } from "react-redux";
import Member from "../com/member";
import "../modules/member";

function loginContainer () {
    const member = useSelector(state => state.member);
    const [inputs,setInputs] = useState({
        id : '',
        password : ''
    });
    const login = (info) => {
        return info.find((member) => 
            member.poleNum.includes(inputs)
        );
      }
      const onClick = () =>{
          member.find
          if(member.id === id && member.password === password){
            //   Navigate("/",{state: { loginck:inputsId }});
            }else{
                alert("실패");
            }
        }
    const onSearch = text => setInputs(text);

    return <Member />
}

export default loginContainer;

