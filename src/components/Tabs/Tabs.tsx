import { Suspense, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Tab,
  Tabs,
} from "@mui/material";
import { tabsConfig } from "@/features/pacs008/config/tabs.config";

export const Pacs008Tabs = () => {
  const [tab, setTab] = useState(0);

  const ActiveComponent = tabsConfig.find(
    (item) => item.value === tab,
  )?.content;

  return (
    <>
      <Tabs
        value={tab}
        onChange={(_, v) => setTab(v)}
        variant="scrollable"
        scrollButtons="auto"
      >
        {tabsConfig.map((item) => {
          const Icon = item.icon;

          return (
            <Tab
              key={item.value}
              value={item.value}
              icon={<Icon />}
              iconPosition="start"
              label={item.label}
            />
          );
        })}
      </Tabs>
      <Box sx={{ mt: 3 }}>
        <Card sx={{ mb: 2, borderRadius: 0.5 }}>
          <CardContent>
            <Suspense fallback={<CircularProgress size={24} />}>
              {ActiveComponent && <ActiveComponent />}
            </Suspense>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};
