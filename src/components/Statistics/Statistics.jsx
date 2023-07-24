import PropTypes from 'prop-types'
import {Ul, Li, SpanLabel, SpanPercentage} from './Statistics.styled'

export const Statistics = ({ stats }) => {
  
  return (
    <Ul>
      {stats.map(({id,label,percentage}) => (
        <Li key={id}>
          <SpanLabel>{label}</SpanLabel>
          <SpanPercentage>{percentage}</SpanPercentage>
        </Li>
      ))}
    </Ul>
  )
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }))
}