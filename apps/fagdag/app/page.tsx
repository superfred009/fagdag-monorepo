export default async function Index() {
  return (
    <div>
      <h1>Welcome to Fagdag! 👋</h1>
      <div style={{ display: 'flex', marginTop: '10px' }}>
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
    </div>
  );
}
