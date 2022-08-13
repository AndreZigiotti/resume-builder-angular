  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(module => module.AuthModule)
  },
