/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * @description 处理菜单权限和按钮权限
 * */
import { PERMISSIONS } from './common/content/permission';

export default function access(initialState: { currentUser?: API.CurrentUser } | undefined) {
  const { currentUser } = initialState ?? {};

  const PermissionList = (currentUser && currentUser.privilegeList) || [];
  console.log(PermissionList);

  return {
    canAdmin: currentUser && currentUser.access === 'admin',
    // 页面菜单的权限
    taskMenage: PermissionList.includes(PERMISSIONS.ALL_ADMIN),

    // 页面操作的权限
  };
}
