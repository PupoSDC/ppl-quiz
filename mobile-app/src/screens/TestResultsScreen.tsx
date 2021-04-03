import { Button, Layout } from "@ui-kitten/components";
import React from "react";

const TestResultsScreen = () => {
  return (
    <Layout>
      <Button style={styles.button} status="primary" accessoryLeft={StarIcon}>
        PRIMARY
      </Button>
    </Layout>
  );
};
