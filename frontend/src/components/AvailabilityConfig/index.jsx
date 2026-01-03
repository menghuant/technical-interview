/**
 * =============================================================================
 * TODO: INTERVIEW TASK - Step 4: Build Frontend & Integrate
 * =============================================================================
 *
 * Build the Availability Configuration component based on the UI screenshot.
 *
 * Requirements:
 * 1. Online Availability Section:
 *    - Monday through Sunday rows
 *    - Each day has a time range picker (start time - end time)
 *    - Format: "08:00 AM - 05:00 PM"
 *
 * 2. Booking Rules Section:
 *    - Buffer Time (buffer to minutes): number input + unit selector
 *    - Minimum Notice (day): number input + unit selector
 *    - Booking Window (ds nows): number input + unit selector
 *
 * 3. Service Configuration Section:
 *    - Fixed Service Duration (hr): number input
 *
 * Tips:
 * - Use AI to generate 80% of the UI from the screenshot
 * - Create a reusable <DayRow /> component instead of repeating code
 * - Write a transformer function to convert frontend state to API format
 * - Remember to call the POST /api/availability/ endpoint to save
 *
 * =============================================================================
 */

function AvailabilityConfig() {
  return (
    <div className="availability-config">
      <div className="todo-placeholder">
        <h3>Interview Task: Availability Configuration</h3>
        <p>
          Implement this component based on the UI screenshot (UI.png).
          Use AI tools to help generate the form components.
        </p>
      </div>
    </div>
  )
}

export default AvailabilityConfig
