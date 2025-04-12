import { NextPageContext } from 'next';

interface ErrorProps {
  statusCode: number;
}

const Error = ({ statusCode }: ErrorProps) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Oops! Something went wrong.</h1>
      <p>
        {statusCode
          ? `An error ${statusCode} occurred on the server.`
          : 'An error occurred on the client.'}
      </p>
    </div>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode || 500 : 404;
  return { statusCode };
};

export default Error;