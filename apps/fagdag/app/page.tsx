export default async function Index() {
  return (
    <div>
      <h1 style={{ color: 'darkblue', fontSize: '100px' }}>
        Welcome to Fagdag! 👋
      </h1>
      <div style={{ display: 'flex', marginTop: '10px', fontSize: '50px' }}>
        <span>Current environment: </span>
        <span
          className="environment"
          style={{
            paddingLeft: '5px',
            paddingRight: '5px',
            marginLeft: '5px',
            backgroundColor: 'green',
            borderRadius: '2px',
            color: 'white',
          }}
        >
          {process.env.WHAT_ENVIRONMENT_AM_I}
        </span>
      </div>
      <div
        style={{
          marginTop: '50px',
          backgroundColor: 'yellow',
          borderRadius: '5px',
          padding: '10px',
        }}
      >
        <p>
          Welcome to this awesome page made on{' '}
          <span style={{ color: 'red' }}>FAGDAG</span>
        </p>
      </div>
    </div>
  );
}
