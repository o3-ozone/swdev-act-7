'use client'

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { useState } from 'react'
import dayjs from 'dayjs'

export default function DateReserve() {
  const [date, setDate] = useState(dayjs())

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Event Date"
        value={date}
        onChange={(newValue) => setDate(newValue || dayjs())}
        sx={{ width: '100%' }}
      />
    </LocalizationProvider>
  )
}