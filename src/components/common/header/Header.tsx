import styled from "styled-components";
import {Avatar, Typography} from "antd";
import {BellOutlined, NotificationFilled} from "@ant-design/icons";

interface IProps {
  title: string;
}

const Header = ({title}: IProps) => {
  return (
    <HeaderWarp>
      <HeaderLeftItem>
        <HeaderTitleItemWrap>
          <Typography style={{fontSize: 20, lineHeight: '32px', color: 'inherit'}}>{title}</Typography>
        </HeaderTitleItemWrap>
      </HeaderLeftItem>
      <HeaderRightItem>
        <HeaderIconItemWrap>
          <BellOutlined
            style={{width: 32, height: 32, fontSize: 22, justifyContent: "center"}}/>
        </HeaderIconItemWrap>
        <HeaderIconItemWrap>
          <Avatar size='default' gap={2}>
            {`ADMIN`}
          </Avatar>
        </HeaderIconItemWrap>
      </HeaderRightItem>
    </HeaderWarp>
  )
}

export default Header;

const HeaderWarp = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex: 0 1 64px;
  background-color: white;

  color: rgb(158, 158, 158);
`;

const HeaderLeftItem = styled.div`
  display: flex;
  flex-direction: row;
`;
const HeaderTitleItemWrap = styled.div`
  padding: 15px 15px 15px 25px;
`;

const HeaderRightItem = styled.div`
  display: flex;
  flex-direction: row;
`;

const HeaderIconItemWrap = styled.div`
  padding: 15px
`;
