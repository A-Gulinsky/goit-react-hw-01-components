import { Section } from "./Section/Section";

import { Container } from "./App/App.styled";

import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendsList } from "./FriendsList/FriendsList";
import { TransactionHistory } from "./Transactions/Transactions";

import user from '../user.json'
import data from '../data.json'
import friends from '../friends.json'
import transactions from '../transactions.json'

export const App = () => {
  return (
    <Container>
      <Profile user={user} />
      
      <Section title='Upload stats'>
        <Statistics stats={data} />
      </Section>
      
      <FriendsList friends={friends} />

      <TransactionHistory items={transactions} />
    </Container>
  );
};
