// RPA Test Workflow - Success & Failure Demo
// Two parallel paths: one succeeds, one fails

export const workflowBlocks = [
  // ===== SUCCESS PATH (top row) =====
  {
    "id": "rpa-success",
    "type": "script",
    "title": "🤖 RPA: Success Test",
    "description": "Visits httpbin.org/html - will find expected content",
    "command": "python scripts/rpa/rpa_success_test.py --visible",
    "workingDir": "C:/Users/Sam G/Documents/NORA/automation",
    "interactive": false,
    "position": { "x": 100, "y": 100 }
  },
  {
    "id": "check-success",
    "type": "condition",
    "title": "Check Success Output",
    "description": "Route based on output containing SUCCESS",
    "logicType": "output-contains",
    "searchString": "SUCCESSFULLY",
    "caseSensitive": false,
    "edgeDefaults": ["contains", "not-contains"],
    "position": { "x": 500, "y": 100 }
  },
  {
    "id": "success-pass",
    "type": "script",
    "title": "✅ SUCCESS PATH - PASS",
    "description": "RPA found expected content",
    "command": "echo SUCCESS PATH: RPA task passed as expected!",
    "workingDir": "C:/Users/Sam G/Documents/NORA/automation",
    "interactive": false,
    "position": { "x": 900, "y": 50 }
  },
  {
    "id": "success-fail",
    "type": "script",
    "title": "⚠️ SUCCESS PATH - UNEXPECTED",
    "description": "This should NOT run",
    "command": "echo SUCCESS PATH: Unexpectedly routed to failure!",
    "workingDir": "C:/Users/Sam G/Documents/NORA/automation",
    "interactive": false,
    "position": { "x": 900, "y": 150 }
  },

  // ===== FAILURE PATH (bottom row) =====
  {
    "id": "rpa-failure",
    "type": "script",
    "title": "🤖 RPA: Failure Test",
    "description": "Visits 404 page - will NOT find expected content",
    "command": "python scripts/rpa/rpa_failure_test.py --visible",
    "workingDir": "C:/Users/Sam G/Documents/NORA/automation",
    "interactive": false,
    "position": { "x": 100, "y": 350 }
  },
  {
    "id": "check-failure",
    "type": "condition",
    "title": "Check Failure Output",
    "description": "Route based on output containing SUCCESS",
    "logicType": "output-contains",
    "searchString": "SUCCESSFULLY",
    "caseSensitive": false,
    "edgeDefaults": ["contains", "not-contains"],
    "position": { "x": 500, "y": 350 }
  },
  {
    "id": "failure-unexpected",
    "type": "script",
    "title": "⚠️ FAILURE PATH - UNEXPECTED",
    "description": "This should NOT run",
    "command": "echo FAILURE PATH: Unexpectedly found success!",
    "workingDir": "C:/Users/Sam G/Documents/NORA/automation",
    "interactive": false,
    "position": { "x": 900, "y": 300 }
  },
  {
    "id": "failure-pass",
    "type": "script",
    "title": "❌ FAILURE PATH - PASS",
    "description": "RPA correctly detected failure",
    "command": "echo FAILURE PATH: RPA correctly failed as expected!",
    "workingDir": "C:/Users/Sam G/Documents/NORA/automation",
    "interactive": false,
    "position": { "x": 900, "y": 400 }
  },

  // ===== NOTES =====
  {
    "id": "notes",
    "type": "notepad",
    "title": "📋 RPA Demo: Success & Failure",
    "description": "About this workflow",
    "notes": "RPA TEST WORKFLOW - DUAL PATH DEMO\n\nTwo parallel RPA tasks demonstrating success and failure routing.\n\n━━━ SUCCESS PATH (top) ━━━\n🤖 Visits httpbin.org/html\n✓ Finds 'Moby Dick' content\n✓ Outputs 'SUCCESSFULLY'\n→ Routes to SUCCESS PASS\n\n━━━ FAILURE PATH (bottom) ━━━\n🤖 Visits httpbin.org/status/404\n✗ Content check fails\n✗ Outputs 'FAILED'\n→ Routes to FAILURE PASS\n\nEXPECTED RESULTS:\n• Top path → ✅ SUCCESS PATH - PASS\n• Bottom path → ❌ FAILURE PATH - PASS\n\nAdd --visible to see browsers (3s delay added)",
    "position": { "x": 100, "y": 550 },
    "width": 350,
    "height": 320
  }
];

export const workflowConnections = [
  // Success path edges
  {
    "id": "e-success-to-check",
    "source": "rpa-success",
    "target": "check-success"
  },
  {
    "id": "e-success-pass",
    "source": "check-success",
    "target": "success-pass",
    "label": "contains"
  },
  {
    "id": "e-success-fail",
    "source": "check-success",
    "target": "success-fail",
    "label": "not-contains"
  },

  // Failure path edges
  {
    "id": "e-failure-to-check",
    "source": "rpa-failure",
    "target": "check-failure"
  },
  {
    "id": "e-failure-unexpected",
    "source": "check-failure",
    "target": "failure-unexpected",
    "label": "contains"
  },
  {
    "id": "e-failure-pass",
    "source": "check-failure",
    "target": "failure-pass",
    "label": "not-contains"
  }
];
