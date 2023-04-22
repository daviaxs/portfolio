import { useEffect, useState } from "react"
import styled from "styled-components"
import config from "../../../../config.json"

import userErrorLoading from "../../assets/userErrorLoading.svg"

const ModalStyle = styled.div``

export function Modal() {
  const url = `https://server-portfolio-jet.vercel.app/user/${config.id}`

  const [user, setUser] = useState({ username: "", avatar: "", discriminator: "" })

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);

        if (response.ok) {
          var data = await response.json();
        } else {
          console.error(response.status, response.statusText);
        }

        if (data) {
          setUser({
            username: data.username,
            avatar: data.avatar,
            discriminator: data.discriminator,
          });
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  if (user.username && user.discriminator && user.avatar) {

    var userName = user.username
    var userTag = user.discriminator
    var avatarUrl = `https://cdn.discordapp.com/avatars/${config.id}/${user.avatar}.png`

  } else {

    var userName = "Carregando..."
    var userTag = "0000"
    var avatarUrl = userErrorLoading

  }

  return (
    <ModalStyle>
      <p>{`${userName}#${userTag}`}</p>
      <img src={avatarUrl} alt="" style={{ height: "20rem", borderRadius: "9999px" }} />
    </ModalStyle>
  )
}
