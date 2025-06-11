import { useEffect, useState } from 'react'

function HomePage(): React.JSX.Element {
  const [machineId, setMachineId] = useState<string>('')

  useEffect(() => {
    async function getMachineId(): Promise<void> {
      const id = await window.api.getMachineId()
      setMachineId(id)
    }
    getMachineId()
  }, [])

  return <h1>{machineId}</h1>
}

export default HomePage
