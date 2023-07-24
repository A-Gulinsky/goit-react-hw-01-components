import PropTypes from 'prop-types'
import { ProfileContainer, DescriptionContainer, Img, Name, Tag, Location, StatsList, StatsItem, SpanLabel, SpanQuantity } from './Profile.styled'

export const Profile = ({ user }) => {
  
  const { username, tag, location, avatar } = user
  const { followers, views, likes } = user.stats
  
  return (
    <ProfileContainer>
      <DescriptionContainer>
        <Img
          src={avatar}
          alt="User avatar"
        />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </DescriptionContainer>

        <StatsList>
          <StatsItem>
            <SpanLabel>Followers</SpanLabel>
            <SpanQuantity>{followers}</SpanQuantity>
          </StatsItem>
          <StatsItem>
            <SpanLabel>Views</SpanLabel>
            <SpanQuantity>{views}</SpanQuantity>
          </StatsItem>
          <StatsItem>
            <SpanLabel>Likes</SpanLabel>
            <SpanQuantity>{likes}</SpanQuantity>
          </StatsItem>
        </StatsList>
    </ProfileContainer>
  )
}

Profile.propTypes = {
  description: PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    })
  })
}