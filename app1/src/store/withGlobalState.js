import React from 'react';

class GlobalStateWithErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true, error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    const globalState = {
      state: {
        globalCount: 0,
      },

      action: {
        setGlobalCount() {
          alert('Get setGlobalCount Action Called!!');
          console.log('Get setGlobalCount Action Called!!');
        },
      },
    };

    if (this.state.hasError) {
      return (
        <div
          style={{
            background: 'red',
            padding: '2rem',
            fontSize: '2rem',
            height: '100%',
          }}
        >
          Something went wrong.
          <br />
          <strong>Failed to load {this.props.displayName}</strong>
        </div>
      );
    }

    return React.Children.map(this.props.children, (child) =>
      React.cloneElement(child, { ...globalState })
    );
  }
}

const withGlobalStateErrorBoundary = (displayName, Component) => ({
  error,
  delayed,
  ...props
}) => (
  <GlobalStateWithErrorBoundary
    displayName={displayName}
    error={error}
    delayed={delayed}
  >
    <Component {...props} />
  </GlobalStateWithErrorBoundary>
);

export default withGlobalStateErrorBoundary;
