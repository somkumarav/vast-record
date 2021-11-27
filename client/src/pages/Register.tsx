import React from 'react';
import '../sass/LoginRegister.scss';

interface Props {}

export const Register: React.FC<Props> = ({}) => {
  return (
    <div className="register">
      <form>
        <input type="file" style={{ display: 'none' }} />
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
