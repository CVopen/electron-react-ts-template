interface RootStore {
  app: AppAction
}


interface AppAction {
  count: number
}

export {
  RootStore,
  AppAction
}