import PropTypes from 'prop-types'

import { Ul ,Li ,CheckIsOnlineDiv ,Img ,Name } from "./FriendsList.styled"

export const FriendsList = ({ friends }) => {
  return (
    <Ul>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <Li key={id}>
          <CheckIsOnlineDiv checkIsOnline={isOnline} />
          <Img src={avatar} alt={name} />
          <Name>{name}</Name>
        </Li>
      ))}
    </Ul>
  )
}

FriendsList.propTypes= {
  friends: PropTypes.arrayOf(PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }))
}