'use client';

import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import Link from 'next/link';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Package Builder', href: '/package-builder' },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250, pt: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2, pb: 2 }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} component={Link} href={item.href} onClick={handleDrawerToggle}>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
        <ListItem>
          <Button
            variant="contained"
            fullWidth
            component={Link}
            href="/package-builder"
            onClick={handleDrawerToggle}
          >
            Start Planning
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="relative"
        sx={{
          bgcolor: 'white',
          boxShadow: 'none',
          color: 'white',
        }}
      >
        <Toolbar sx={{ flexDirection: 'column', pt: { xs: 1, md: 2 }, pb: { xs: 1, md: 0 } }}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box component={Link} href="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <Box
                component="img"
                src="/images/event_works_logo.png"
                alt="Event Works"
                sx={{
                  height: { xs: 150, md: 195 },
                  width: 'auto',
                  mixBlendMode: 'multiply',
                }}
              />
            </Box>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Box sx={{ display: 'flex', gap: { xs: 2, md: 4 }, mt: 2 }}>
              <Button component={Link} href="/services" sx={{ color: '#000', fontFamily: 'Azonix', fontSize: { xs: '0.7rem', md: '0.85rem' }, '&:hover': { color: '#D4AF37' } }}>Services</Button>
              <Button component={Link} href="/portfolio" sx={{ color: '#000', fontFamily: 'Azonix', fontSize: { xs: '0.7rem', md: '0.85rem' }, '&:hover': { color: '#D4AF37' } }}>Portfolio</Button>
              <Button component={Link} href="/about" sx={{ color: '#000', fontFamily: 'Azonix', fontSize: { xs: '0.7rem', md: '0.85rem' }, '&:hover': { color: '#D4AF37' } }}>About</Button>
              <Button component={Link} href="/contact" sx={{ color: '#000', fontFamily: 'Azonix', fontSize: { xs: '0.7rem', md: '0.85rem' }, '&:hover': { color: '#D4AF37' } }}>Contact</Button>
            </Box>
          </motion.div>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>


    </>
  );
}