import React, { memo } from 'react';

import { Handle } from 'react-flow-renderer';

export default memo(({ data, isConnectable }) => {
  return (
    <div style={{ width: '200px', height: '50px' }}>
      <div
        style={{
          height: '100%',
          width: '100%',
          fontSize: '22px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {data?.label}
      </div>
      <Handle
        type="source"
        position="right"
        id="a"
        style={{
          top: '50%',
          background: '#000',
          width: '20px',
          height: '20px',
          right: '-12px',
        }}
        isConnectable={isConnectable}
      />
    </div>
  );
});
