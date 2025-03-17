'use client'

import { useState } from 'react'
import { TextField, Select, MenuItem, FormControl, InputLabel, Button, Box } from '@mui/material'
import DateReserve from '@/components/DateReserve'

export default function BookingPage() {
  const [venue, setVenue] = useState('')

  const handleVenueChange = (event: any) => {
    setVenue(event.target.value)
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Venue Booking</h1>
      
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '100%' },
          '& .MuiFormControl-root': { m: 1, width: '100%' },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextField
            name="Name-Lastname"
            label="Name-Lastname"
            variant="standard"
            fullWidth
          />
          
          <TextField
            name="Contact-Number"
            label="Contact-Number"
            variant="standard"
            fullWidth
          />
        </div>
        
        <div className="mt-4">
          <FormControl variant="standard" fullWidth>
            <InputLabel id="venue-label">Venue</InputLabel>
            <Select
              labelId="venue-label"
              id="venue"
              value={venue}
              onChange={handleVenueChange}
            >
              <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
              <MenuItem value="Spark">Spark Space</MenuItem>
              <MenuItem value="GrandTable">The Grand Table</MenuItem>
            </Select>
          </FormControl>
        </div>
        
        <div className="mt-4">
          <DateReserve />
        </div>
        
        <div className="mt-6">
          <Button 
            name="Book Venue"
            variant="contained" 
            color="primary" 
            type="submit"
          >
            Book Venue
          </Button>
        </div>
      </Box>
    </div>
  )
}