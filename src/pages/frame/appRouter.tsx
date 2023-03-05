import React, { useEffect, useState } from "react"
import { useRoutes } from "react-router-dom"

import { generateRouter } from './utils'
import routerList from './list'

const AppRouter = () => {
  return useRoutes(generateRouter(routerList))
}

export default AppRouter