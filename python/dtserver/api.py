from typing import AsyncIterable, List
import numpy as np
import functools


import grpc_routing_pb2_grpc, grpc_routing_pb2


class PyAPI(grpc_routing_pb2_grpc.RoutingServicer):

    # ==============================================
    # Utils
    # ==============================================
    def _assert_active_dataset(self):
        assert self.active_dataset is not None, "Active dataset not yet set."

    # ==============================================
    # API
    # ==============================================

    # FEATURES
    def ExampleFunction(
        self, request: grpc_routing_pb2.NoneLike, unused_context
    ) -> List[grpc_routing_pb2.Feature]:
        return 1.0
