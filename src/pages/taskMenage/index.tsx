import { Button } from 'antd';
// import React from 'react';
import { useAccess } from 'umi';

export default function TaskMenage() {
  const access = useAccess();

  return (
    <div>
      TaskMenage
      {access.taskMenage ? <Button type="primary">操作</Button> : <Button>不能操作</Button>}
    </div>
  );
}
