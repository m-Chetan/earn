import React from 'react';

import { styles } from './styles';

interface SubmissionProps {
  name: string;
  bountyName: string;
}

export const SubmissionTemplate = ({ name, bountyName }: SubmissionProps) => {
  return (
    <div style={styles.container}>
      <p style={styles.greetings}>Hey {name},</p>
      <p style={styles.textWithMargin}>
        Nice work! Your submission for <strong>{bountyName}</strong> has been
        received. Pour yourself a glass of something tasty &mdash; you&rsquo;ve
        earned it 🥳
      </p>
      <p style={styles.textWithMargin}>
        Once the deadline passes, you&rsquo;ll be able to see all the other
        submissions on the listing page. We&rsquo;ll then send you an email once
        the winners (hopefully including you) are announced!
      </p>
      <p style={styles.salutation}>Best,</p>
      <p style={styles.text}>Superteam Earn</p>
    </div>
  );
};
