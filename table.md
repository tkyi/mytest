# Provider Configuration Definition

 | Property | Values | Description |
 | ------------ | -------- | ------------- |
 | name | `aws` | Name of the supported cloud provider |
 | region | `us-east-1` / `us-west-2` / [all AWS regions](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html) | Default value is `us-west-2`. It defines the region where the required infrastructure is setup and where builds will run |
 | accountId | Valid AWS account ID | This defines the AWS account ID where builds will be provisioned |
 | vpcId | Valid AWS VPC ID | This defines the AWS VPC ID |
 | securityGroupIds | List of valid security group IDs | This defines the AWS Security Group Id |
 | subnetIds | List of valid subnet IDs | This defines the AWS Subnet ID |
 | role | ARN of a valid AWS IAM role  | This defines the AWS IAM Role ARN with permissions and policies |
 | executor | `sls` / `eks` | Defines the two executor modes for native builds: `sls` (AWS CodeBuild) and `eks` (AWS EKS). |
 | launcherImage | Valid Screwdriver launcher Docker image | This defines the Screwdriver launcher image required for starting builds `e.g: screwdrivercd/launcher:v6.0.149` |
 | launcherVersion | e.g: `v6.0.149` | Version of the Screwdriver launcher image |
 | buildRegion | `us-east-1` / `us-west-2` | Region where builds will run if different from service region. Default value is same as `region`. |
 | executorLogs | `true` / `false` | Flag to view logs in AWS CloudWatch for the AWS CodeBuild project. Default value is `false`. |
 | privilegedMode | `true` / `false` | Flag to enable privileged mode for Docker build in the AWS CodeBuild project. Default value is `false`. |
 | computeType | All supported [AWS CodeBuild Compute Types](https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-compute-types.html) | This defines the different compute types with available memory, vCPUs, and disk space. Default value is `BUILD_GENERAL1_SMALL`.   |
 | environmentType | All supported [AWS CodeBuild Environment](https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-compute-types.html) | This defines the different environment types corresponding with `computeType`. Default value is `LINUX_CONTAINER`. |
